// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  if (x < 2) {
    return x; // 0 and 1
  }

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2); // formula for calculating midpoint

    // halving our data set every loop if the midpoint is not a square root
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }

  // finally when left is equal to right we break out of the loop, returning the final left value - 1
  return left - 1;
};

mySqrt(8); // 1, 2, 3, 4, 5, 6, 7, 8

const prompt69 = `

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
`;
