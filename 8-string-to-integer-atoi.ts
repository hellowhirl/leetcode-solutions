// 8. String to Integer (atoi)

function myAtoi(s: string): number {
  debugger;

  //   s = s.replace(/\s/g, "");

  if (s.length === 1 && s.charCodeAt(0) === 45) {
    return 0;
  }
  if (
    (s.charCodeAt(0) !== 32 &&
      s.charCodeAt(0) !== 45 &&
      s.charCodeAt(0) !== 43 &&
      s.charCodeAt(0) < 47) ||
    s.charCodeAt(0) > 57 ||
    s.length === 0
  ) {
    return 0;
  }

  let numberResult: string[] = [];
  let negative = false;

  let i = 0;

  while (s.charCodeAt(i) === 32) {
    i++;
  }
  let start = i;

  // -
  if (s.charCodeAt(start) === 45) {
    negative = true;
    start++;
  }
  // +
  else if (s.charCodeAt(start) === 43) {
    negative = false;
    start++;
  }

  for (let i = start; i < s.length; i++) {
    if (
      s.charCodeAt(i) < 47 &&
      s.charCodeAt(i) > 57 &&
      numberResult.length !== 0
    ) {
      break;
    } else if (
      (s.charCodeAt(i) >= 47 && s.charCodeAt(i) <= 57) ||
      s.charCodeAt(i) === 46
    ) {
      numberResult.push(s[i]);
    } else {
      break;
    }
  }

  if (numberResult.length === 0) {
    return 0;
  }

  let finalNumber = parseInt(numberResult.join(""));
  finalNumber = negative ? -finalNumber : finalNumber;

  if (finalNumber >= 2147483647 || finalNumber <= -2147483648 - 1) {
    return negative ? -2147483648 : 2147483647;
  }

  return Math.floor(finalNumber);
}

// const test8 = "-91283472332";
// const test8 = "   -42";
// const test8 = "-+12";
// const test8 = "+1";
// const test8 = "+-12";
const test8 = "-5-";
// const test8 = "-13+8";
myAtoi(test8);
