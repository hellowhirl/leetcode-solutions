// 53 Maximum subarray

function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let globalSUm = nums[0];

  for (var i = 1; i < nums.length; i++) {
    const combinedSum = nums[i] + currentSum;
    if (combinedSum > nums[i]) {
      currentSum = combinedSum;
    } else {
      currentSum = nums[i];
    }
    if (currentSum > globalSUm) {
      globalSUm = currentSum;
    }
  }
  return globalSUm;
}

const problem53 = `

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.


Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
`;
