// 125. Valid Palindrome - two pointers

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  function isValidCharacter(char) {
    return char.length === 1 && char.toLowerCase().match(/[a-z0-9]/i);
  }

  while (pointer1 < pointer2) {
    if (isValidCharacter(s[pointer1]) && isValidCharacter(s[pointer2])) {
      if (s[pointer1].toLowerCase() !== s[pointer2].toLowerCase()) {
        return false;
      }
      pointer1++;
      pointer2--;
    } else if (!isValidCharacter(s[pointer1])) {
      pointer1++;
    } else if (!isValidCharacter(s[pointer2])) {
      pointer2--;
    }
  }

  return true;
};

const test1 = "A man, a plan, a canal: Panama";
const test2 = "noon";
const test3 = "racecar";
const test4 = "race a car";

isPalindrome(test1);

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
