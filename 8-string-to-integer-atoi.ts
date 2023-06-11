// 8. String to Integer (atoi)

function myAtoi(s) {
  debugger;
  let numberResult = 0;
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
    let num = s.charCodeAt(i) - 48;

    if (num >= 0 && num <= 9) {
      numberResult *= 10;
      numberResult += s.charCodeAt(i) - 48;
    } else {
      break;
    }
  }

  let finalNumber = negative ? -numberResult : numberResult;

  if (finalNumber < -(2 ** 31) || finalNumber > 2 ** 31 - 1) {
    return negative ? -(2 ** 31) : 2 ** 31 - 1;
  }

  return finalNumber;
}

// const test8 = "-91283472332";
const test8 = "   -42";
// const test8 = "-+12";
// const test8 = "+1";
// const test8 = "+-12";
// const test8 = "-5-";
// const test8 = "-13+8";
myAtoi(test8);
