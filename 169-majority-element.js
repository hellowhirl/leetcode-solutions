// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }

    if (map.get(nums[i]) / nums.length > 0.5) {
      return nums[i];
    }
  }
};

const test1 = [3, 2, 3];
const test2 = [2, 2, 1, 1, 1, 2, 2, 2, 1];
const test3 = [8, 8, 7, 7, 7];
majorityElement(test3);

const prompt169 = `

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
`;
