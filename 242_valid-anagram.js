// 242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let letterCount = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in letterCount) {
      letterCount[s[i]] += 1;
    } else {
      letterCount[s[i]] = 1;
    }
  }
  console.log(letterCount);

  for (let j = 0; j < t.length; j++) {
    if (t[j] in letterCount) {
      if (letterCount[t[j]] === 0) return false;
      letterCount[t[j]] -= 1;
    } else {
      return false;
    }
  }
  console.log(letterCount);

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);

  if (sumValues(letterCount) !== 0) return false;
  return true;
};

// const s = "anagram";
// const t = "nagaram";
const s = "aacc";
const t = "ccac";

isAnagram(s, t);

const prompt = `

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
