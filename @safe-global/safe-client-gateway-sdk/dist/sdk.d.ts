/**
 * This file was auto-generated. Do not make direct changes.
 */
import type { FetchOptions } from "openapi-fetch";
import type { FilterKeys, HttpMethod } from "openapi-typescript-helpers";
import type { paths } from "./schema";
type ExtractOptions<
  Method extends HttpMethod,
  Path extends keyof paths,
> = FetchOptions<FilterKeys<paths[Path], Method>>;
export type getAbout =
  paths["/about"]["get"]["responses"][200]["content"]["application/json"];
export declare function getAbout(
  options: ExtractOptions<"get", "/about">,
): Promise<getAbout>;
export type createAccount =
  paths["/v1/accounts"]["post"]["responses"][200]["content"]["application/json"];
export declare function createAccount(
  options: ExtractOptions<"post", "/v1/accounts">,
): Promise<createAccount>;
export type getDataTypes =
  paths["/v1/accounts/data-types"]["get"]["responses"][200]["content"]["application/json"];
export declare function getDataTypes(
  options: ExtractOptions<"get", "/v1/accounts/data-types">,
): Promise<getDataTypes>;
export type getAccountDataSettings =
  paths["/v1/accounts/{address}/data-settings"]["get"]["responses"][200]["content"]["application/json"];
export declare function getAccountDataSettings(
  options: ExtractOptions<"get", "/v1/accounts/{address}/data-settings">,
): Promise<getAccountDataSettings>;
export type upsertAccountDataSettings =
  paths["/v1/accounts/{address}/data-settings"]["put"]["responses"][200]["content"]["application/json"];
export declare function upsertAccountDataSettings(
  options: ExtractOptions<"put", "/v1/accounts/{address}/data-settings">,
): Promise<upsertAccountDataSettings>;
export type getAccount =
  paths["/v1/accounts/{address}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getAccount(
  options: ExtractOptions<"get", "/v1/accounts/{address}">,
): Promise<getAccount>;
export type deleteAccount = never;
export declare function deleteAccount(
  options: ExtractOptions<"delete", "/v1/accounts/{address}">,
): Promise<deleteAccount>;
export type getCounterfactualSafe =
  paths["/v1/accounts/{address}/counterfactual-safes/{chainId}/{predictedAddress}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCounterfactualSafe(
  options: ExtractOptions<
    "get",
    "/v1/accounts/{address}/counterfactual-safes/{chainId}/{predictedAddress}"
  >,
): Promise<getCounterfactualSafe>;
export type deleteCounterfactualSafe = never;
export declare function deleteCounterfactualSafe(
  options: ExtractOptions<
    "delete",
    "/v1/accounts/{address}/counterfactual-safes/{chainId}/{predictedAddress}"
  >,
): Promise<deleteCounterfactualSafe>;
export type getCounterfactualSafes =
  paths["/v1/accounts/{address}/counterfactual-safes"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCounterfactualSafes(
  options: ExtractOptions<"get", "/v1/accounts/{address}/counterfactual-safes">,
): Promise<getCounterfactualSafes>;
export type createCounterfactualSafe =
  paths["/v1/accounts/{address}/counterfactual-safes"]["put"]["responses"][200]["content"]["application/json"];
export declare function createCounterfactualSafe(
  options: ExtractOptions<"put", "/v1/accounts/{address}/counterfactual-safes">,
): Promise<createCounterfactualSafe>;
export type deleteCounterfactualSafes = never;
export declare function deleteCounterfactualSafes(
  options: ExtractOptions<
    "delete",
    "/v1/accounts/{address}/counterfactual-safes"
  >,
): Promise<deleteCounterfactualSafes>;
export type getNonce =
  paths["/v1/auth/nonce"]["get"]["responses"][200]["content"]["application/json"];
export declare function getNonce(
  options: ExtractOptions<"get", "/v1/auth/nonce">,
): Promise<getNonce>;
export type verify = never;
export declare function verify(
  options: ExtractOptions<"post", "/v1/auth/verify">,
): Promise<verify>;
export type getBalances =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/balances/{fiatCode}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getBalances(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/balances/{fiatCode}"
  >,
): Promise<getBalances>;
export type getSupportedFiatCodes = never;
export declare function getSupportedFiatCodes(
  options: ExtractOptions<"get", "/v1/balances/supported-fiat-codes">,
): Promise<getSupportedFiatCodes>;
export type getChains =
  paths["/v1/chains"]["get"]["responses"][200]["content"]["application/json"];
export declare function getChains(
  options: ExtractOptions<"get", "/v1/chains">,
): Promise<getChains>;
export type getChain =
  paths["/v1/chains/{chainId}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getChain(
  options: ExtractOptions<"get", "/v1/chains/{chainId}">,
): Promise<getChain>;
export type getAboutChain =
  paths["/v1/chains/{chainId}/about"]["get"]["responses"][200]["content"]["application/json"];
export declare function getAboutChain(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/about">,
): Promise<getAboutChain>;
export type getBackbone =
  paths["/v1/chains/{chainId}/about/backbone"]["get"]["responses"][200]["content"]["application/json"];
export declare function getBackbone(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/about/backbone">,
): Promise<getBackbone>;
export type getMasterCopies =
  paths["/v1/chains/{chainId}/about/master-copies"]["get"]["responses"][200]["content"]["application/json"];
export declare function getMasterCopies(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/about/master-copies">,
): Promise<getMasterCopies>;
export type getIndexingStatus =
  paths["/v1/chains/{chainId}/about/indexing"]["get"]["responses"][200]["content"]["application/json"];
export declare function getIndexingStatus(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/about/indexing">,
): Promise<getIndexingStatus>;
export type getCollectibles =
  paths["/v2/chains/{chainId}/safes/{safeAddress}/collectibles"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCollectibles(
  options: ExtractOptions<
    "get",
    "/v2/chains/{chainId}/safes/{safeAddress}/collectibles"
  >,
): Promise<getCollectibles>;
export type getCampaigns =
  paths["/v1/community/campaigns"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCampaigns(
  options: ExtractOptions<"get", "/v1/community/campaigns">,
): Promise<getCampaigns>;
export type getCampaignById =
  paths["/v1/community/campaigns/{resourceId}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCampaignById(
  options: ExtractOptions<"get", "/v1/community/campaigns/{resourceId}">,
): Promise<getCampaignById>;
export type getCampaignActivities = never;
export declare function getCampaignActivities(
  options: ExtractOptions<
    "get",
    "/v1/community/campaigns/{resourceId}/activities"
  >,
): Promise<getCampaignActivities>;
export type getCampaignLeaderboard =
  paths["/v1/community/campaigns/{resourceId}/leaderboard"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCampaignLeaderboard(
  options: ExtractOptions<
    "get",
    "/v1/community/campaigns/{resourceId}/leaderboard"
  >,
): Promise<getCampaignLeaderboard>;
export type getCampaignRank =
  paths["/v1/community/campaigns/{resourceId}/leaderboard/{safeAddress}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCampaignRank(
  options: ExtractOptions<
    "get",
    "/v1/community/campaigns/{resourceId}/leaderboard/{safeAddress}"
  >,
): Promise<getCampaignRank>;
export type getLeaderboard =
  paths["/v1/community/locking/leaderboard"]["get"]["responses"][200]["content"]["application/json"];
export declare function getLeaderboard(
  options: ExtractOptions<"get", "/v1/community/locking/leaderboard">,
): Promise<getLeaderboard>;
export type getLockingRank =
  paths["/v1/community/locking/{safeAddress}/rank"]["get"]["responses"][200]["content"]["application/json"];
export declare function getLockingRank(
  options: ExtractOptions<"get", "/v1/community/locking/{safeAddress}/rank">,
): Promise<getLockingRank>;
export type getLockingHistory =
  paths["/v1/community/locking/{safeAddress}/history"]["get"]["responses"][200]["content"]["application/json"];
export declare function getLockingHistory(
  options: ExtractOptions<"get", "/v1/community/locking/{safeAddress}/history">,
): Promise<getLockingHistory>;
export type getContract =
  paths["/v1/chains/{chainId}/contracts/{contractAddress}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getContract(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/contracts/{contractAddress}"
  >,
): Promise<getContract>;
export type getDataDecoded =
  paths["/v1/chains/{chainId}/data-decoder"]["post"]["responses"][200]["content"]["application/json"];
export declare function getDataDecoded(
  options: ExtractOptions<"post", "/v1/chains/{chainId}/data-decoder">,
): Promise<getDataDecoded>;
export type getDelegates =
  paths["/v1/chains/{chainId}/delegates"]["get"]["responses"][200]["content"]["application/json"];
export declare function getDelegates(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/delegates">,
): Promise<getDelegates>;
export type postDelegate = never;
export declare function postDelegate(
  options: ExtractOptions<"post", "/v1/chains/{chainId}/delegates">,
): Promise<postDelegate>;
export type deleteDelegate = never;
export declare function deleteDelegate(
  options: ExtractOptions<
    "delete",
    "/v1/chains/{chainId}/delegates/{delegateAddress}"
  >,
): Promise<deleteDelegate>;
export type deleteSafeDelegate = never;
export declare function deleteSafeDelegate(
  options: ExtractOptions<
    "delete",
    "/v1/chains/{chainId}/safes/{safeAddress}/delegates/{delegateAddress}"
  >,
): Promise<deleteSafeDelegate>;
export type getDelegatesV2 =
  paths["/v2/chains/{chainId}/delegates"]["get"]["responses"][200]["content"]["application/json"];
export declare function getDelegatesV2(
  options: ExtractOptions<"get", "/v2/chains/{chainId}/delegates">,
): Promise<getDelegatesV2>;
export type postDelegateV2 = never;
export declare function postDelegateV2(
  options: ExtractOptions<"post", "/v2/chains/{chainId}/delegates">,
): Promise<postDelegateV2>;
export type deleteDelegateV2 = never;
export declare function deleteDelegateV2(
  options: ExtractOptions<
    "delete",
    "/v2/chains/{chainId}/delegates/{delegateAddress}"
  >,
): Promise<deleteDelegateV2>;
export type addRecoveryModule = never;
export declare function addRecoveryModule(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/safes/{safeAddress}/recovery"
  >,
): Promise<addRecoveryModule>;
export type deleteRecoveryModule = never;
export declare function deleteRecoveryModule(
  options: ExtractOptions<
    "delete",
    "/v1/chains/{chainId}/safes/{safeAddress}/recovery/{moduleAddress}"
  >,
): Promise<deleteRecoveryModule>;
export type getEstimation =
  paths["/v2/chains/{chainId}/safes/{address}/multisig-transactions/estimations"]["post"]["responses"][200]["content"]["application/json"];
export declare function getEstimation(
  options: ExtractOptions<
    "post",
    "/v2/chains/{chainId}/safes/{address}/multisig-transactions/estimations"
  >,
): Promise<getEstimation>;
export type getMessageByHash =
  paths["/v1/chains/{chainId}/messages/{messageHash}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getMessageByHash(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/messages/{messageHash}">,
): Promise<getMessageByHash>;
export type getMessagesBySafe =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/messages"]["get"]["responses"][200]["content"]["application/json"];
export declare function getMessagesBySafe(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/messages"
  >,
): Promise<getMessagesBySafe>;
export type createMessage = never;
export declare function createMessage(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/safes/{safeAddress}/messages"
  >,
): Promise<createMessage>;
export type updateMessageSignature = never;
export declare function updateMessageSignature(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/messages/{messageHash}/signatures"
  >,
): Promise<updateMessageSignature>;
export type registerDevice = never;
export declare function registerDevice(
  options: ExtractOptions<"post", "/v1/register/notifications">,
): Promise<registerDevice>;
export type unregisterDevice = never;
export declare function unregisterDevice(
  options: ExtractOptions<
    "delete",
    "/v1/chains/{chainId}/notifications/devices/{uuid}"
  >,
): Promise<unregisterDevice>;
export type unregisterSafe = never;
export declare function unregisterSafe(
  options: ExtractOptions<
    "delete",
    "/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safeAddress}"
  >,
): Promise<unregisterSafe>;
export type getSafesByOwner =
  paths["/v1/chains/{chainId}/owners/{ownerAddress}/safes"]["get"]["responses"][200]["content"]["application/json"];
export declare function getSafesByOwner(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/owners/{ownerAddress}/safes"
  >,
): Promise<getSafesByOwner>;
export type getAllSafesByOwner =
  paths["/v1/owners/{ownerAddress}/safes"]["get"]["responses"][200]["content"]["application/json"];
export declare function getAllSafesByOwner(
  options: ExtractOptions<"get", "/v1/owners/{ownerAddress}/safes">,
): Promise<getAllSafesByOwner>;
export type relay = never;
export declare function relay(
  options: ExtractOptions<"post", "/v1/chains/{chainId}/relay">,
): Promise<relay>;
export type getRelaysRemaining = never;
export declare function getRelaysRemaining(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/relay/{safeAddress}">,
): Promise<getRelaysRemaining>;
export type getSafeApps =
  paths["/v1/chains/{chainId}/safe-apps"]["get"]["responses"][200]["content"]["application/json"];
export declare function getSafeApps(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/safe-apps">,
): Promise<getSafeApps>;
export type getSafe =
  paths["/v1/chains/{chainId}/safes/{safeAddress}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getSafe(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/safes/{safeAddress}">,
): Promise<getSafe>;
export type getNonces =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/nonces"]["get"]["responses"][200]["content"]["application/json"];
export declare function getNonces(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/nonces"
  >,
): Promise<getNonces>;
export type getSafeOverview = never;
export declare function getSafeOverview(
  options: ExtractOptions<"get", "/v1/safes">,
): Promise<getSafeOverview>;
export type getSubmission =
  paths["/v1/targeted-messaging/outreaches/{outreachId}/chains/{chainId}/safes/{safeAddress}/signers/{signerAddress}/submissions"]["get"]["responses"][200]["content"]["application/json"];
export declare function getSubmission(
  options: ExtractOptions<
    "get",
    "/v1/targeted-messaging/outreaches/{outreachId}/chains/{chainId}/safes/{safeAddress}/signers/{signerAddress}/submissions"
  >,
): Promise<getSubmission>;
export type createSubmission =
  paths["/v1/targeted-messaging/outreaches/{outreachId}/chains/{chainId}/safes/{safeAddress}/signers/{signerAddress}/submissions"]["post"]["responses"][201]["content"]["application/json"];
export declare function createSubmission(
  options: ExtractOptions<
    "post",
    "/v1/targeted-messaging/outreaches/{outreachId}/chains/{chainId}/safes/{safeAddress}/signers/{signerAddress}/submissions"
  >,
): Promise<createSubmission>;
export type getTransactionById =
  paths["/v1/chains/{chainId}/transactions/{id}"]["get"]["responses"][200]["content"]["application/json"];
export declare function getTransactionById(
  options: ExtractOptions<"get", "/v1/chains/{chainId}/transactions/{id}">,
): Promise<getTransactionById>;
export type getMultisigTransactions =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/multisig-transactions"]["get"]["responses"][200]["content"]["application/json"];
export declare function getMultisigTransactions(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/multisig-transactions"
  >,
): Promise<getMultisigTransactions>;
export type deleteTransaction = never;
export declare function deleteTransaction(
  options: ExtractOptions<
    "delete",
    "/v1/chains/{chainId}/transactions/{safeTxHash}"
  >,
): Promise<deleteTransaction>;
export type getModuleTransactions =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/module-transactions"]["get"]["responses"][200]["content"]["application/json"];
export declare function getModuleTransactions(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/module-transactions"
  >,
): Promise<getModuleTransactions>;
export type addConfirmation =
  paths["/v1/chains/{chainId}/transactions/{safeTxHash}/confirmations"]["post"]["responses"][200]["content"]["application/json"];
export declare function addConfirmation(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/transactions/{safeTxHash}/confirmations"
  >,
): Promise<addConfirmation>;
export type getIncomingTransfers =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/incoming-transfers"]["get"]["responses"][200]["content"]["application/json"];
export declare function getIncomingTransfers(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/incoming-transfers"
  >,
): Promise<getIncomingTransfers>;
export type previewTransaction =
  paths["/v1/chains/{chainId}/transactions/{safeAddress}/preview"]["post"]["responses"][200]["content"]["application/json"];
export declare function previewTransaction(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/transactions/{safeAddress}/preview"
  >,
): Promise<previewTransaction>;
export type getTransactionQueue =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/transactions/queued"]["get"]["responses"][200]["content"]["application/json"];
export declare function getTransactionQueue(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/queued"
  >,
): Promise<getTransactionQueue>;
export type getTransactionsHistory =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/transactions/history"]["get"]["responses"][200]["content"]["application/json"];
export declare function getTransactionsHistory(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/history"
  >,
): Promise<getTransactionsHistory>;
export type proposeTransaction =
  paths["/v1/chains/{chainId}/transactions/{safeAddress}/propose"]["post"]["responses"][200]["content"]["application/json"];
export declare function proposeTransaction(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/transactions/{safeAddress}/propose"
  >,
): Promise<proposeTransaction>;
export type getCreationTransaction =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/transactions/creation"]["get"]["responses"][200]["content"]["application/json"];
export declare function getCreationTransaction(
  options: ExtractOptions<
    "get",
    "/v1/chains/{chainId}/safes/{safeAddress}/transactions/creation"
  >,
): Promise<getCreationTransaction>;
export type getTransactionConfirmationView =
  paths["/v1/chains/{chainId}/safes/{safeAddress}/views/transaction-confirmation"]["post"]["responses"][200]["content"]["application/json"];
export declare function getTransactionConfirmationView(
  options: ExtractOptions<
    "post",
    "/v1/chains/{chainId}/safes/{safeAddress}/views/transaction-confirmation"
  >,
): Promise<getTransactionConfirmationView>;
export {};
