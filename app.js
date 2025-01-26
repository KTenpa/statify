const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

/**
 * GET /mode
 * Endpoint to calculate the mode of an array of numbers.
 * Expects a query parameter nums with a comma-separated list of numbers.
 */
app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);
});

/**
 * GET /mean
 * Endpoint to calculate the mean of an array of numbers.
 * Expects a query parameter nums with a comma-separated list of numbers.
 */
app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);

    if (nums instanceof Error) {
        return next(new ExpressError(nums.message, 400));
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    return res.send(result);
});

/**
 * GET /median
 * Endpoint to calculate the median of an array of numbers.
 * Expects a query parameter nums with a comma-separated list of numbers.
 */
app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    return res.send(result);
});

/**
 * Error handler for routes that don't match any defined endpoints.
 */
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

/**
 * Global error handler for all errors, returning a JSON response with the error message and status.
 */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err,
        message: err.message
    });
});

// Server initialization
const server = app.listen(3000, function () {
    console.log(`Server starting on port 3000`);
});

// Export the app and server for testing or further use
module.exports = { app, server };
