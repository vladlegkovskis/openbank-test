export const HttpStatus = {
  OK: {
    value: 200,
    reasonPhrase: 'OK',
  },
  CREATED: {
    value: 201,
    reasonPhrase: 'Created',
  },
  BAD_REQUEST: {
    value: 400,
    reasonPhrase: 'Bad Request',
  },
  UNAUTHORIZED: {
    value: 401,
    reasonPhrase: 'Unauthorized',
  },
  PAYMENT_REQUIRED: {
    value: 402,
    reasonPhrase: 'Payment Required',
  },
  FORBIDDEN: {
    value: 403,
    reasonPhrase: 'Forbidden',
  },
  NOT_FOUND: {
    value: 404,
    reasonPhrase: 'Not Found',
  },
  INTERNAL_SERVER_ERROR: {
    value: 500,
    reasonPhrase: 'Internal Server Error',
  },
  NOT_IMPLEMENTED: {
    value: 501,
    reasonPhrase: 'Not Implemented',
  },
  BAD_GATEWAY: {
    value: 502,
    reasonPhrase: 'Bad Gateway',
  },
  SERVICE_UNAVAILABLE: {
    value: 503,
    reasonPhrase: 'Service Unavailable',
  },
  GATEWAY_TIMEOUT: {
    value: 504,
    reasonPhrase: 'Gateway Timeout',
  },
  CALL_FAILURE: {
    value: 900,
    reasonPhrase: 'Impossible to execute the call',
  },
};
