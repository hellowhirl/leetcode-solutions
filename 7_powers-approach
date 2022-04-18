// 7. Reverse Integer - powers approach

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const positive = x > 0 ? true : false;
  if (!positive) x = -x;

  const numsArr = Array.from(String(x), Number);
  let reversed = 0;
  let counter = 0;

  for (let i = 0; i < numsArr.length; i++) {
    reversed += numsArr[i] * Math.pow(10, counter);
    counter++;
  }

  if (reversed > Math.pow(2, 31)) return 0;

  return positive ? reversed : -reversed;
};

const x = 123; // desired: 321
reverse(x);

const prompt = `

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
`;
