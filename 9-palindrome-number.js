/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10;
    reversed += x % 10;
    x = Math.floor(x / 10);
  }

  return reversed === original ? true : false;
};

const test = 121;
isPalindrome(test);
