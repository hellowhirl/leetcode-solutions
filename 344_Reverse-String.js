// 344. Reverse String

var reverseString = function (strArr) {
  const len = strArr.length;

  for (let i = 0; i < len / 2; i++) {
    const temp = strArr[i];

    strArr[i] = strArr[len - 1 - i];

    strArr[len - 1 - i] = temp;
  }

  return strArr;
};

const s = ["h", "e", "l", "l", "o"];
reverseString(s);

const prompt = `
Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
`;
