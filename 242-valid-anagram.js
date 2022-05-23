// 242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let letterCount = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in letterCount) {
      letterCount[s[i]] += 1;
    } else {
      letterCount[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] in letterCount) {
      if (letterCount[t[j]] === 0) return false;
      letterCount[t[j]] -= 1;
    } else {
      return false; // for letters that are not in the original string
    }
  }

  // if all tests above pass then the 2 words are indeed anagrams
  return true;
};

// const s = "anagram";
// const t = "nagaram";
const s = "aacc";
const t = "ccac";

isAnagram(s, t);

const prompt = `

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
`;
