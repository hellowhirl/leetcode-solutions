// 189. Rotate Array - reverse method

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (arr, k) {
  if (arr.length === 1 || k === 0) {
    return arr;
  }

  k = k % arr.length;
  let temp = [];

  let reverser = (arr, beg, end) => {
    const middle = Math.floor((end + 1 - beg) / 2) + beg;
    for (let i = beg; i <= end; i++) {
      if (i < middle) {
        temp.push(arr[i]);
        arr[i] = arr[end - i + beg];
      } else if (i > middle) {
        arr[i] = temp.pop();
      } else if ((end + 1 - beg) % 2 === 0) {
        arr[i] = temp.pop();
      }
    }
  };

  reverser(arr, 0, arr.length - 1);
  reverser(arr, 0, k - 1);
  reverser(arr, k, arr.length - 1);

  return arr;
};

console.log(rotate([1, 2, 3, 4, 5], 2));
console.log(rotate([1, 2, 3, 4, 5], 2) === [4, 5, 1, 2, 3]);
// console.log(rotate([1, 2, 3, 4], 2) === [3, 4, 1, 2]);
// console.log(rotate([1, 2, 3, 4, 5], 7) === [4, 5, 1, 2, 3]);
