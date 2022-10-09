// 88. Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  let nums1pointer = m - 1;
  let nums2pointer = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (nums2pointer < 0) {
      break;
    } // when we exhaust every item in nums2, it means we have a fully sorted nums1 array

    if (nums1[nums1pointer] > nums2[nums2pointer]) {
      nums1[i] = nums1[nums1pointer];
      nums1pointer--;
    } else {
      nums1[i] = nums2[nums2pointer];
      nums2pointer--;
    }
  }

  return nums1;
};

// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;

// const nums1 = [0];
// const m = 0;
// const nums2 = [1];
// const n = 1;

const nums1 = [2, 0]; // when 1 is compared to 'undefined' on the 2nd iteration, it will return false and proceed to the else block
const m = 1;
const nums2 = [1];
const n = 1;

// const nums1 = [4, 0, 0, 0, 0, 0];
// const m = 1;
// const nums2 = [1, 2, 3, 5, 6];
// const n = 5;

merge(nums1, m, nums2, n);

const prompt88 = `

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
`;
