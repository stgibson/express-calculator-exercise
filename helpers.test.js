const { getMean, getMedian, getMode } = require("./helpers");

describe("tests getMean(nums)", () => {
  test("gets correct mean for 1 number", () => {
    expect(getMean([2])).toEqual(2);
  });

  test("gets correct mean for more than 1 number", () => {
    expect(getMean([1, 4, 9, 6])).toEqual(5);
  });
});

describe("tests getMedian(nums)", () => {
  test("gets correct median for 1 number", () => {
    expect(getMean([2])).toEqual(2);
  });

  test("gets correct median for even number of numbers", () => {
    expect(getMean([1, 4, 9, 6])).toEqual(5);
  });

  test("gets correct median for pdd number of numbers", () => {
    expect(getMedian([1, 3, 5, 9, 9])).toEqual(5);
  });
});

describe("tests getMode(nums)", () => {
  test("gets correct mode for 1 number", () => {
    expect(getMode([2])).toEqual(2);
  });

  test("gets correct mode for more than 1 number", () => {
    expect(getMode([1, 3, 3, 5, 5, 5, 4])).toEqual(5);
  });
});