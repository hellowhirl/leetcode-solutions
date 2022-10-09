// 136. Single Number

var singleNumber = function (nums) {
  let set = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in set) {
      delete set[nums[i]];
    } else {
      set[nums[i]] = nums[i];
    }
  }

  return Object.values(set)[0];
};

const nums = [2, 2, 1];

singleNumber(nums);
