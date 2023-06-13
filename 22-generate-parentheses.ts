// s2. Generate Parentheses

function generateParenthesis(n: number): string[] {
  // global result
  const result: string[] = [];

  // recursion (dfs)
  const dfs = (i, n, slate, oParen, cParen) => {
    // BACK-TRACKING
    if (cParen > oParen) return; // ex. ()) or )
    if (oParen > n) return; // if n = 2, ex. (((

    //// BASE CASE
    if (i === n * 2) {
      result.push(slate.join("")); // when we reach this we can confidently add to the result
      return;
    }

    //// RECURSION CASE

    // add "("
    slate.push("(");
    dfs(i + 1, n, slate, oParen + 1, cParen);
    slate.pop();

    // add "("
    slate.push(")");
    dfs(i + 1, n, slate, oParen, cParen + 1);
    slate.pop();
  };

  dfs(0, n, [], 0, 0);

  return result;
}

generateParenthesis(2);
