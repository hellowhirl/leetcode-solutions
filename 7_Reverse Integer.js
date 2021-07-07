// 7. Reverse Integer

const prompt = `
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 
Constraints:

-231 <= x <= 231 - 1
`;

var reverse = function (x) {
  if (x === 0) return 0;

  let negative;
  if (x < 0) {
    negative = true;
  }

  let reversed = Math.abs(x).toString().split("").reverse();

  while (reversed[0] === "0") {
    reversed.shift();
  }

  let joined = reversed.join("");

  if (-joined < Math.pow(-2, 31) || joined > Math.pow(2, 31) - 1) {
    return 0;
  }

  return negative ? -joined : joined;
};

const x = 12340;
// const x = 1534236469;
// const x = -2147483648;
reverse(x);
