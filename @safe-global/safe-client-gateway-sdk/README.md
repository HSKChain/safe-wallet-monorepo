# Safe Client Gateway TypeScript SDK

A TypeScript SDK for the [Safe Client Gateway](https://github.com/safe-global/safe-client-gateway).

## Usage Policy

**Important**: The Safe Client Gateway is intended for internal use only and should not be used in public-facing applications, such as Safe Apps. Please avoid using this SDK if you’re building for public consumption.

## Installation

To install the SDK, run the following command:

```shell
yarn add @safe-global/safe-client-gateway-sdk
```

## Example Usage

Below is an example of how to import and use the SDK to retrieve information about a specific chain:

```ts
import { getChain, type Chain } from "@safe-global/safe-client-gateway-sdk";

const chain = await getChain({
  params: {
    path: {
      chainId: "1",
    },
  },
});
```

## Customization

The SDK requires no initialization. However, if you need to override the default base URL (for instance, to point to a staging environment), you can do so at the root of your project as follows:

```ts
import { setBaseUrl } from "@safe-global/safe-client-gateway-sdk";

// Example: use the staging deployment
setBaseUrl("https://safe-client.staging.5afe.dev");
```

## Generating a New Build

The **‘Release’** workflow should automatically run in accordance with updates to the Safe Client Gateway. However, it can also be manually triggered.
