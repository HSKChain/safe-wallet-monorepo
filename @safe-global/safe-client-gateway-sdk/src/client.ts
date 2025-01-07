/**
 * This file was auto-generated. Do not make direct changes.
 */

import _createClient from "openapi-fetch";

import type { paths } from "./schema";

const createClient = _createClient<paths>;

let _client = createClient({
  baseUrl: "https://safe-client.safe.global",
});

export function getClient() {
  return _client;
}

export function setBaseUrl(baseUrl: string) {
  _client = createClient({ baseUrl });
}
