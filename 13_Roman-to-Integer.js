// 13. Roman to Integer

const prompt = `
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Examples:

Input: "III"
Output: 3

Input: "IV"
Output: 4

Input: "IX"
Output: 9

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
`;

//////

var romanToInt = function (s) {
  const arr = s.split("");
  let sum = [];

  arr.map((n) => {
    n === "I" ? sum.push(1) : null;
    n === "V" ? sum.push(5) : null;
    n === "X" ? sum.push(10) : null;
    n === "L" ? sum.push(50) : null;
    n === "C" ? sum.push(100) : null;
    n === "D" ? sum.push(500) : null;
    n === "M" ? sum.push(1000) : null;
  });

  const startValue = sum[0];
  let totalValue = 0;
  let edgecase = false;

  sum.reduce((a, b) => {
    if ((b === 5 || b === 10) && a === 1) {
      totalValue += b - 2;
      edgecase = true;
    }
    if ((b === 50 || b === 100) && a === 10) {
      totalValue += b - 20;
      edgecase = true;
    }
    if ((b === 500 || b === 1000) && a === 100) {
      totalValue += b - 200;
      edgecase = true;
    }
    if (!edgecase) {
      totalValue += b;
    }

    edgecase = false;
    return b;
  }, startValue);

  return totalValue;
};
