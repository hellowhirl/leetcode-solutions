// 283. Move Zeroes

var moveZeroes = function (nums) {
  let count = nums.length;

  for (let i = 0; i < count; i++) {
    if (nums[i] === 0) {
      const removed = nums.splice(i, 1)[0];
      nums.push(removed);
      i--;
      count--;
    }
  }
};

// const nums = [0, 1, 0, 3, 12];
const nums = [0, 0, 1];

moveZeroes(nums);

const prompt = `
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
`;
