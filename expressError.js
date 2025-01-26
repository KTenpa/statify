class ExpressError extends Error {
    constructor(message, status) {
      super(message); // Calls parent constructor (Error)
      this.status = status;
      Error.captureStackTrace(this, this.constructor); // Captures stack trace for easier debugging
    }
  }
  
  module.exports = ExpressError;
  