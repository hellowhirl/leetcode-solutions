// 15. 3Sum

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b); // sorted array approach
  const result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // have to look at previous iteration for duplicate or not
    let start = i + 1;
    let end = nums.length - 1;
    const target = 0 - nums[i]; // equivalent to nums[i] + nums[j] + nums[k] = 0
    while (start < end) {
      const sum = nums[start] + nums[end];

      if (sum < target) {
        start++; // no number less than start can fulfil the target
      } else if (sum > target) {
        end--; // no number greater than end can fulfil the target
      } else {
        result.push([nums[i], nums[start], nums[end]]);
        // looking haead for upcoming duplicates or not
        while (nums[start] === nums[start + 1]) {
          start++;
        }
        while (nums[end] === nums[start - 1]) {
          end--;
        }
        start++;
        end--;
      }
    }
  }
  return result;
}

// threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([-1, -2, 0, 3]);
threeSum([0, 0, 0]);
