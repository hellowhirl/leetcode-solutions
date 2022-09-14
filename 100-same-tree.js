// 100. Same Tree

/**
 * Definition for a binary tree node.
 */

var TreeNode = /** @class */ (function () {
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  return TreeNode;
})();

function isSameTree(p, q) {
  debugger;
  if (p === null || q === null) {
    return p === q; // if both are null then return true and jump out of this recursive call to previous evaluation point
  }
  if (p.val !== q.val) {
    return false;
  }
  return (isSameTree(p.right, q.right) && 
    isSameTree(p.left, q.left)
    );
}

const testTree1 = {
  val: 10,
  left: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 12,
    left: null,
    right: null,
  },
};

const testTree2 = {
  val: 10,
  left: {
    val: 5,
    left: null,
    right: null,
  },
  right: {
    val: 12,
    left: null,
    right: null,
  },
};

isSameTree(testTree1, testTree2);


const problem100 = `

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
`;