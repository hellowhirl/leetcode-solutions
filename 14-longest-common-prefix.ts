// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs: string[]): string {
  let common = "";

  const first = strs.shift() || common;

  for (let i = 0; i <= first.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) === first.charAt(i)) {
        continue;
      } else {
        return common;
      }
    }
    common += first.charAt(i);
  }
  return common;
};

const foo = ["flower", "flow", "flight"];
const bar = ["cir", "can"];
longestCommonPrefix(bar);

const problem = `

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
`;
