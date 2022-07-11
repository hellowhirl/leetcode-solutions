function isValid(s: string): boolean {
  const stack = new MyAnotherStack();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      continue;
    }
    if (s[i] === ")" && stack.peek() === "(") {
      stack.pop();
      continue;
    }
    if (s[i] === "}" && stack.peek() === "{") {
      stack.pop();
      continue;
    }
    if (s[i] === "]" && stack.peek() === "[") {
      stack.pop();
      continue;
    }
    return false; // fails at the first sign of invalid parenthesis
  }

  return stack.isEmpty(); // needed to check in case remaining string is '(', '[', or '{'
}

class MyAnotherStack {
  stack: Record<number, string>;
  currentIndex: number;

  constructor() {
    this.stack = {};
    this.currentIndex = 0;
  }

  push(val: string) {
    this.stack[this.currentIndex] = val;
    this.currentIndex++;
  }

  pop() {
    if (this.currentIndex === 0) {
      return undefined;
    }
    this.currentIndex--;
    const popped = this.stack[this.currentIndex];
    delete this.stack[this.currentIndex];
    return popped;
  }

  peek() {
    return this.stack[this.currentIndex - 1];
  }

  size() {
    return this.currentIndex;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const test = "()";
isValid(test);

const problem = `

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
`;
