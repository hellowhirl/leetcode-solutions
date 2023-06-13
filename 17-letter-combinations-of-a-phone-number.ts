// 17. Letter Combinations of a Phone Number

function letterCombinations(digits: string): string[] {
  // edge case, empty string
  if (digits.length === 0) {
    return [];
  }

  const charsMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  // final global result
  const result: string[] = [];

  // Backtracking recursion
  const dfs = (i, digits, slate) => {
    //// BASE CASE
    if (i === digits.length) {
      result.push(slate.join("")); // end of this permutation
      return;
    }

    //// RECURSIVE CASE
    const chars = charsMap[digits[i]]; // get the set of chars that will be iterated through below

    for (let char of chars) {
      slate.push(char); // push a(nother) letter on this permutation
      dfs(i + 1, digits, slate); // recursive loop into each step of the permutation
      slate.pop(); // clear the slate to be used for next permutation
    }
  };

  dfs(0, digits, []);

  return result;
}

letterCombinations("23"); // 9 combinations
