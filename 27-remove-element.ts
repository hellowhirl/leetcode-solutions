// 27. Remove element

function removeElement(nums: number[], val: number): number {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
}

const testFoo = [3, 2, 2, 3]; // remove 3
const testBar = [0, 1, 2, 2, 3, 0, 4, 2]; // val = 2
removeElement(testFoo, 3);
removeElement(testBar, 2);

const problem27 = `

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
`;
