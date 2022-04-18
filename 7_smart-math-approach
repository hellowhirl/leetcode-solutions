// 7. Reverse Integer - smart math approach

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const negative = x < 0;
  let reversed = 0;
  if (negative) x = -x;

  while (x > 0) {
    reversed = reversed * 10; // increases reversed number by another digit
    reversed += x % 10; // yields reveresed integer from left to right, by adding previously reversed (integer * 10) and the remainder of the current (last digit, achieved with the mod operator)
    // *returns the operand that is being divided if the divider operand is larger
    x = Math.floor(x / 10); // removes last digit of current until eventually rounding down to 0
  }

  if (reversed > Math.pow(2, 31)) return 0;

  return !negative ? reversed : -reversed;
};

const x = 123; // desired: 321
reverse(x);

const prompt = `

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`;
