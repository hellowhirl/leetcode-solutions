// 268. Missing Number

var missingNumber = function (nums) {
  const n = nums.length;
  const grandTotal = (n * (n + 1)) / 2;
  const subTotal = nums.reduce((a, b) => a + b);
  return grandTotal - subTotal;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
missingNumber(nums);

const prompt = `
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
`;
