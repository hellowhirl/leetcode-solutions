// 136. Single Number - with Set
var singleNumber = function (nums) {
  let set = new Set();

  for (let number of nums) {
    if (set.has(number)) {
      set.delete(number);
    } else {
      set.add(number);
    }
  }

  return Array.from(set)[0];
};
