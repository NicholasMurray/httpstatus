const commonResponseCodes = [
  400, // Bad Request
  401, // Unauthorized
  403, // Forbidden
  404, // Not Found
  422, // Unprocessable Entity
  500, // Internal Server Error
];

const postResponseCodes = [
  200, // OK
  201, // Created
  204, // No Content
].concat(commonResponseCodes);

const putResponseCodes = [
  200, // OK
  201, // Created
  204, // No Content
].concat(commonResponseCodes);

const patchResponseCodes = [
  200, // OK
  204, // No Content
].concat(commonResponseCodes);

const deleteResponseCodes = [
  200, // OK
  202, // Accepted
  204, // No Content
].concat(commonResponseCodes);

exports.postResponseCodes = postResponseCodes;
exports.putResponseCodes = putResponseCodes;
exports.patchResponseCodes = patchResponseCodes;
exports.deleteResponseCodes = deleteResponseCodes;
