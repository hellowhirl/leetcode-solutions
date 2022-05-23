//////
// WIP
//

// 290. Word Pattern

var wordPattern = function (wordSplit, s) {
  //
  let leftPointer = "";
  let patternCode = [];

  for (let i = 0; i < wordSplit.length; i++) {
    if (leftPointer === "") {
      leftPointer = wordSplit[i];
      patternCode.push(1);
      continue;
    }
    if (leftPointer === wordSplit[i]) {
      patternCode.splice(i - 1, 1, patternCode[i - 1] + 1);
    } else patternCode.push(1);
    leftPointer = wordSplit[i];
  }

  let splitWords = s.split(" ");
  let leftWordPointer = "";
  let wordPatternCode = [];

  for (let i = 0; i < splitWords.length; i++) {
    if (leftWordPointer === "") {
      leftWordPointer = splitWords[i];
      wordPatternCode.push(1);
      continue;
    }
    if (leftWordPointer === splitWords[i]) {
      wordPatternCode.splice(i - 1, 1, wordPatternCode[i - 1] + 1);
    } else wordPatternCode.push(1);
    leftWordPointer = splitWords[i];
  }

  return JSON.stringify(patternCode) === JSON.stringify(wordPatternCode);
};

const pattern = "abba";
const s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
