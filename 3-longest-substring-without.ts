// 3. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let highest = 0;
  let current = 0;
  let left = 0;
  let right = 0;
  let last = "";

  while (right >= left) {
    if (s[right] === undefined) {
      break;
    }
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      current++;
    } else {
      while (true) {
        if (s[left] === s[right]) {
          if (s[right] === last) {
            current = 1;
          }
          left++;
          right++;
          break;
        }
        set.delete(s[left]);
        left++;
        current--;
      }
    }
    last = s[right - 1];
    highest = current > highest ? current : highest;
  }
  return highest;
}

// const test3 = "abcabcbb";
// const test3 = "bbbbb";
// const test3 = "pwwkew";
// const test3 = "aab";
// const test3 = "dvdf";
const test3 = "tmmzuxt";
lengthOfLongestSubstring(test3);
