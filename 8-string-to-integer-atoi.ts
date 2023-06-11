// 8. String to Integer (atoi)

function myAtoi(s: string): number {
  let numberResult: string[] = [];
  let negative = false;
  let i = 0;

  while (s.charCodeAt(i) === 32) {
    i++;
  }
  let startIndex = i;

  // -
  if (s.charCodeAt(startIndex) === 45) {
    negative = true;
    startIndex++;
  }
  // +
  else if (s.charCodeAt(startIndex) === 43) {
    negative = false;
    startIndex++;
  }

  for (let i = startIndex; i < s.length; i++) {
    if (
      s.charCodeAt(i) < 47 &&
      s.charCodeAt(i) > 57 &&
      numberResult.length !== 0
    ) {
      break;
    } else if (s.charCodeAt(i) >= 47 && s.charCodeAt(i) <= 57) {
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

  if (finalNumber < -(2 ** 31) || finalNumber > 2 ** 31 - 1) {
    return negative ? -(2 ** 31) : 2 ** 31 - 1;
  }

  return finalNumber;
}

// const test8 = "-91283472332";
// const test8 = "   -42";
// const test8 = "-+12";
// const test8 = "+1";
// const test8 = "+-12";
const test8 = "-5-";
// const test8 = "-13+8";
myAtoi(test8);
