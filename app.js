const express = require('express');
const app = express();
const ExpressError = require('./error');
const {mean, median, mode, validateNums} = require('./functions');


app.get('/mean', function(req, res, next){
    if (!req.query.nums) {
        throw new ExpressError("Error: Pass in comma-separated list of numbers for mean calculation.", 400)
    }

    let numsStr = req.query.nums.split(',');
    //validate input and return nums as array of integers
    let nums = validateNums(numsStr)

    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let result = {
        operation: "mean",
        result: mean(nums)
    };

    return res.send(result);
});


app.get('/median', function(req, res, next){
    if (!req.query.nums) {
        throw new ExpressError("Error: Pass in comma-separated list of numbers for median calculation.", 400)
    }

    let numsStr = req.query.nums.split(',');
    //validate input and return nums as array of integers
    let nums = validateNums(numsStr)

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median", 
        result: median(nums)
    };

    return res.send(result);
})


app.get('/mode', function(req, res, next){
    if (!req.query.nums) {
        throw new ExpressError("Error: Pass in comma-separated list of numbers for mode calculation.", 400)
    }

    let numsStr = req.query.nums.split(',');
    //validate input and return nums as array of integers
    let nums = validateNums(numsStr)

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode", 
        result: mode(nums)
    };

    return res.send(result);
})


/** general error handler */
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
    // pass the error to the next piece of middleware
    return next(err);
  });
  
  /** general error handler */
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json(err);
  });


app.listen(3000, function() {
    console.log('Server started on port 3000.');
})