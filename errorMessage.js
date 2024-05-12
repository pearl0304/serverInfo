const errorMessages = {
  // Main Errors
  '100': { status: 500, message: 'Internal Server Error' },
  '101': { status: 404, message: 'Resource Not Found' },

  // User Errors
  '200': { status: 400, message: 'Invalid User Input' },
  '201': { status: 403, message: 'Unauthorized Access' },

  // Board Errors
  '300': { status: 404, message: 'Board Not Found' },
  '301': { status: 403, message: 'Action Forbidden on Board' }
};

const getErrorMessage = (code) => errorMessages[code] || { status: 500, message: 'Unknown Error' };

export default getErrorMessage;
