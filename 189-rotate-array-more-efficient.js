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

  let reverser = (arr, beg, end) => {
    let temp;
    while (beg < end) {
      temp = arr[beg];
      arr[beg] = arr[end];
      arr[end] = temp;
      beg++;
      end--;
    }
  };

  reverser(arr, 0, arr.length - 1);
  reverser(arr, 0, k - 1);
  reverser(arr, k, arr.length - 1);

  return arr;
};

console.log(rotate([1, 2, 3, 4, 5], 2));
console.log(rotate([1, 2, 3, 4, 5], 2) == [4, 5, 1, 2, 3]);
// console.log(rotate([1, 2, 3, 4], 2) === [3, 4, 1, 2]);
// console.log(rotate([1, 2, 3, 4, 5], 7) === [4, 5, 1, 2, 3]);
