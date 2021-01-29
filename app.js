const { getMean, getMedian, getMode } = require("./helpers");
const express = require("express");

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

const app = express();

app.get("/mean", (req, res, next) => {
  const numsString = req.query["nums"];
  if (numsString) {
    const nums = numsString.split(",");
    for (let i = 0; i < nums.length; i++) {
      const num = Number(nums[i]);
      if (!num) {
        const notANumberError = new
          ExpressError(`${nums[i]} is not a number`, 400);
          return next(notANumberError);
      }
      else {
        nums[i] = num;
      }
    }
    const value = getMean(nums);
    return res.send({ operation: "mean", value });
  }
  else {
    const missingParam = new ExpressError("nums are required", 400);
    return next(missingParam);
  }
});

app.get("/median", (req, res, next) => {
  const numsString = req.query["nums"];
  if (numsString) {
    const nums = numsString.split(",");
    for (let i = 0; i < nums.length; i++) {
      const num = Number(nums[i]);
      if (!num) {
        const notANumberError = new
          ExpressError(`${nums[i]} is not a number`, 400);
          return next(notANumberError);
      }
      else {
        nums[i] = num;
      }
    }
    const value = getMedian(nums);
    return res.send({ operation: "median", value });
  }
  else {
    const missingParam = new ExpressError("nums are required", 400);
    return next(missingParam);
  }
});

app.get("/mode", (req, res, next) => {
  const numsString = req.query["nums"];
  if (numsString) {
    const nums = numsString.split(",");
    for (let i = 0; i < nums.length; i++) {
      const num = Number(nums[i]);
      if (!num) {
        const notANumberError = new
          ExpressError(`${nums[i]} is not a number`, 400);
          return next(notANumberError);
      }
      else {
        nums[i] = num;
      }
    }
    const value = getMode(nums);
    return res.send({ operation: "mode", value });
  }
  else {
    const missingParam = new ExpressError("nums are required", 400);
    return next(missingParam);
  }
});

app.get("/all", (req, res, next) => {
  const numsString = req.query["nums"];
  if (numsString) {
    const nums = numsString.split(",");
    for (let i = 0; i < nums.length; i++) {
      const num = Number(nums[i]);
      if (!num) {
        const notANumberError = new
          ExpressError(`${nums[i]} is not a number`, 400);
          return next(notANumberError);
      }
      else {
        nums[i] = num;
      }
    }
    const mean = getMean(nums);
    const median = getMedian(nums);
    const mode = getMode(nums);
    return res.send({ operation: "all", mean, median, mode });
  }
  else {
    const missingParam = new ExpressError("nums are required", 400);
    return next(missingParam);
  }
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({ error: { message, status } });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});