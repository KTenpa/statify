const express = require('express');
const app = express();
const ExpressError = require('./expressError');

// Export the app and the server
const server = app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});

module.exports = { app, server };
