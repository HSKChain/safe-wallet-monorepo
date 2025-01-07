import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";

import {
  CGW_REPO,
  CLIENT_FILE_NAME,
  DIST_FOLDER_NAME,
  SCHEMA_FILE_NAME,
  SDK_FILE_NAME,
  SRC_FOLDER_NAME,
  WARNING,
} from "./constants";
import {
  extractSwaggerSchema,
  getBarrel,
  getClient,
  getSwaggerUiInit,
  getWrappers,
  parseSwaggerSchema,
} from "./helpers";

/**
 * Script for building and deploying the SDK:
 *
 * 1. Build process:
 *   - Fetches and parses the latest Swagger schema
 *   - Generates openapiTS schema, client, and wrappers
 *   - Saves and compiles the generated code
 *
 * 2. Deployment process (if changes are detected):
 *   - Commits, tags, and pushes the changes
 *   - Creates a draft release with the NPM tarball
 *   - Triggers the deployment pipeline
 */
(async (): Promise<void> => {
  const NPM_DEPLOYMENT_HOOK_URL = process.env.NPM_DEPLOYMENT_HOOK_URL;
  const NPM_DEPLOYMENT_HOOK_TOKEN = process.env.NPM_DEPLOYMENT_HOOK_TOKEN;

  if (!NPM_DEPLOYMENT_HOOK_URL || !NPM_DEPLOYMENT_HOOK_TOKEN) {
    console.error("ERROR: Missing hook credentials");
    process.exit(1);
  }

  const packageJson = ((): Record<string, unknown> => {
    try {
      const content = fs.readFileSync("package.json", "utf8");
      return JSON.parse(content);
    } catch (e) {
      console.error("ERROR: Unable to read package.json", e);
      process.exit(1);
    }
  })();
  const packageName = packageJson.name;
  const packageVersion = packageJson.version;

  if (typeof packageName !== "string" || typeof packageVersion !== "string") {
    console.error("ERROR: Invalid package.json");
    process.exit(1);
  }

  /**
   * Derives SDK version from the latest CGW release tag and current HEAD hash:
   *
   * - If CGW HEAD matches a release tag: v1.2.3
   * - If CGW HEAD does not match a release tag: v1.2.3-next-abc1234
   */
  const newVersion = ((): string => {
    try {
      const cgwHeadHash = execSync(`git ls-remote ${CGW_REPO} HEAD`)
        .toString()
        .split("\t")[0];
      const [cgwTagHash, cgwTagRef] = execSync(
        `git ls-remote --tags --sort=-v:refname ${CGW_REPO}`,
      )
        .toString()
        .trim()
        .split("\n")[0]
        .split("\t");
      const cgwTag = cgwTagRef.split("/")[2];
      const cgwVersion = cgwTag.slice(1);
      if (cgwHeadHash === cgwTagHash) {
        return cgwVersion;
      } else {
        return `${cgwVersion}-next-${cgwHeadHash.slice(0, 7)}`;
      }
    } catch (e) {
      console.error("ERROR: Unable to calculate current version", e);
      process.exit(1);
    }
  })();
  const newTag = `v${newVersion}`;

  if (newVersion === packageVersion) {
    console.log("SDK is up-to-date");
    process.exit(0);
  }

  console.log("Removing old src...");
  try {
    execSync(`rm -rf ${SRC_FOLDER_NAME}`);
    execSync(`mkdir ${SRC_FOLDER_NAME}`);
  } catch (e) {
    console.error("ERROR: Unable to remove old src", e);
    process.exit(1);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Build                                   */
  /* -------------------------------------------------------------------------- */

  const sdk = await (async (): Promise<{
    schema: string;
    client: string;
    wrappers: string;
    barrel: string;
  }> => {
    console.log("Generating new src...");
    const swaggerUiInit = await getSwaggerUiInit();
    const swaggerSchema = extractSwaggerSchema(swaggerUiInit);
    try {
      return {
        schema: await parseSwaggerSchema(swaggerSchema),
        client: getClient(),
        wrappers: getWrappers(swaggerSchema),
        barrel: getBarrel(),
      };
    } catch (e) {
      console.error("ERROR: Unable to generate new src", e);
      process.exit(1);
    }
  })();

  try {
    [
      [SCHEMA_FILE_NAME, sdk.schema],
      [CLIENT_FILE_NAME, sdk.client],
      [SDK_FILE_NAME, sdk.wrappers],
      ["index", sdk.barrel],
    ].forEach(([name, data]) => {
      const file = path.join(SRC_FOLDER_NAME, `${name}.ts`);
      console.log(`Saving ${file}...`);
      fs.writeFileSync(file, [WARNING, data].join("\n\n"));
    });
  } catch (e) {
    console.error("ERROR: Unable to save new src", e);
    process.exit(1);
  }

  console.log("Compiling dist...");
  try {
    // TypeScript doesn't clear the dist folder
    execSync(`rm -rf ${DIST_FOLDER_NAME}`);
    execSync("tsc");

    execSync(`prettier -w '${DIST_FOLDER_NAME}/**/*'`);
    execSync(`prettier -w '${SRC_FOLDER_NAME}/**/*'`);
  } catch (e) {
    console.error("ERROR: Unable to compile dist", e);
    process.exit(1);
  }

  try {
    execSync("git diff --quiet");
    console.log("SDK is up-to-date");
    process.exit(0);
  } catch {
    // Continue
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Deployment                                 */
  /* -------------------------------------------------------------------------- */

  console.log("Pushing changes...");
  try {
    execSync(`npm version ${newVersion} --no-git-tag-version`);

    execSync("git add .");
    execSync(`git commit -m "${newTag}"`);
    execSync(`git tag ${newTag}`);
    execSync("git push --follow-tags");
  } catch (e) {
    console.error("ERROR: Unable to push changes", e);
    process.exit(1);
  }

  console.log("Generating NPM package...");
  try {
    execSync("npm pack");
  } catch (e) {
    console.error("ERROR: Unable to generate NPM package", e);
    process.exit(1);
  }

  console.log("Drafting release with NPM tarball...");
  try {
    const tarballName = `${packageName.replace("@", "").replace("/", "-")}-${newVersion}.tgz`;
    const headHash = execSync("git rev-parse HEAD").toString().trim();
    execSync(
      `gh release create "${newTag}" --draft --generate-notes --target "${headHash}" --title "${newTag}" "${tarballName}"`,
    );
  } catch (e) {
    console.error("ERROR: Unable to create draft release", e);
    process.exit(1);
  }

  console.log("Triggering pipeline...");
  try {
    execSync(
      `curl -X POST --fail -F token=${NPM_DEPLOYMENT_HOOK_TOKEN} -F ref=main ${NPM_DEPLOYMENT_HOOK_URL}`,
    );
  } catch {
    // Don't console.log the error object to not expose sensitive information
    console.error("ERROR: Unable to trigger pipeline");
    process.exit(1);
  }
})();
