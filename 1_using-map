// 1. Two Sum - using map

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let pairNum = target - nums[i];
    if (pairNum in map) return [map[pairNum], i];
    map[nums[i]] = i;
  }
};

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);

const prompt = `
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
`;
