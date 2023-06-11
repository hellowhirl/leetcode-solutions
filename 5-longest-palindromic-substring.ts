// 5. Longest Palindromic Substring

function longestPalindrome(s) {
  if (s.length < 2) {
    return s;
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = measurePalindrome(s, i, i);
    let eventPalindrome = measurePalindrome(s, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (eventPalindrome.length > longest.length) {
      longest = eventPalindrome;
    }
  }

  return longest;
}

function measurePalindrome(string, left, right) {
  let i = 0;

  while (string[left - i] && string[left - i] === string[right + i]) {
    i++;
  }
  i--; // negate to go back to last valid palinndrome iteration

  return string.slice(left - i, right + i + 1);
}

// Test cases
// longestPalindrome("babad"); // Output: "bab" or "aba"
longestPalindrome("bb"); // Output: "bab" or "aba"
// console.log(longestPalindrome("cbbd")); // Output: "bb"
