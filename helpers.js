/**
 * Gets mean value of numbers in nums
 * @param {Array[number]} nums The numbers to get mean value from
 * @return mean
 */
function getMean(nums) {
  // first get sum, then divide by number of nums
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

/**
 * Gets median value of numbers in nums
 * @param {Array[number]} nums The numbers to get median value from
 * @return median
 */
function getMedian(nums) {
  // first sort nums
  nums.sort((a, b) => a - b);
  // if even number of numbers, median is average of 2 middle numbers
  if (nums.length % 2 == 0) {
    return (nums[(nums.length / 2) - 1] + nums[nums.length / 2]) / 2;
  }
  // otherwise, get middle number
  else {
    return nums[Math.trunc(nums.length / 2)];
  }
}

/**
 * Gets mode from numbers in nums
 * @param {Array[number]} nums The numbers to get mode value from
 * @return mode
 */
function getMode(nums) {
  // determine the frequency of each number in num
  const frequencies = {};
  for (let num of nums) {
    if (frequencies[num]) {
      frequencies[num]++;
    }
    else {
      frequencies[num] = 1;
    }
  }
  // find the number that occurs most in num
  let mode = 0;
  let max_freq = 0;
  for (let num in frequencies) {
    if (frequencies[num] > max_freq) {
      max_freq = frequencies[num];
      mode = num;
    }
  }
  return Number(mode);
}

module.exports = { getMean, getMedian, getMode };