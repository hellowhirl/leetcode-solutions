// 26. Remove duplicates from sorted array

function removeDuplicates(nums: number[]): number {
  let prev: number | null = null;
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[pointer] = nums[i];
      prev = nums[i];
      pointer++;
    } else {
      delete nums[i];
    }
  }

  return pointer;
}
