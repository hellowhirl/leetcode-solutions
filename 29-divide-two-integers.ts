// 29. Divide Two Integers

function divide(dividend: number, divisor: number): number {
  let negative = false;

  if (divisor < 0 && dividend > 0) {
    negative = true;
  }
  if (dividend < 0 && divisor > 0) {
    negative = true;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let result = 0;

  while (dividend >= divisor) {
    let count = 1;
    let binaryDivisor = divisor;

    // left shifting (fast track iteration) of binaryDivisor until the iteration before half of the dividend (dividen >> 1)
    // this will make sure that we don't exceed the dividend with our binaryDivisor
    while (binaryDivisor <= dividend >> 1) {
      binaryDivisor = binaryDivisor << 1; // left shift (multiply by 2) at each iteration
      count = count << 1; // // left shift (multiply by 2) at each iteration
    }
    dividend -= binaryDivisor; // keep chipping away at dividend to evntaully exit this while loop
    result += count;
  }

  result = negative ? -result : result;

  if (result >= 2147483648) {
    return 2147483647;
  } else if (result < -2147483648) {
    return -2147483648;
  } else {
    return result;
  }
}

divide(10, 3);
