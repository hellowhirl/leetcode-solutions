// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  debugger;
  const replaced = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const stack = [];

  for (let i = 0; i < Math.floor(replaced.length / 2); i++) {
    stack.push(replaced[i]);
  }

  let counter = 0;
  for (let i = replaced.length - 1; i >= Math.ceil(replaced.length / 2); i--) {
    if (replaced[i] !== stack[counter]) return false;
    counter++;
  }

  return true;
};

const test1 = "A man, a plan, a canal: Panama";
const test2 = "noon";
const test3 = "racecar";
const test4 = "race a car";

isPalindrome(test4);

const prompt125 = `
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
`;
