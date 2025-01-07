"use strict";
/**
 * This file was auto-generated. Do not make direct changes.
 */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = getClient;
exports.setBaseUrl = setBaseUrl;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const createClient = openapi_fetch_1.default;
let _client = createClient({
  baseUrl: "https://safe-client.safe.global",
});
function getClient() {
  return _client;
}
function setBaseUrl(baseUrl) {
  _client = createClient({ baseUrl });
}
//# sourceMappingURL=client.js.map
