/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let common = "";
  if (strs.length === 0) return common;

  const first = strs.shift();

  for (let i = 0; i <= first.length; i++) {
    let counter = 0;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].charAt(i) === first.charAt(i)) {
        counter++;
      } else {
        return common;
      }
    }
    if (counter === strs.length) {
      common += first.charAt(i);
    }
  }

  return common;
};

const foo = ["flower", "flow", "flight"];
const bar = ["cir", "can"];
longestCommonPrefix(bar);
