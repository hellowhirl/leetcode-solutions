// 101-symmetric-tree

class TreeNode101 {
     val: number
     left: TreeNode101 | null
     right: TreeNode101 | null
     constructor(val?: number, left?: TreeNode101 | null, right?: TreeNode101 | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

//  Input: root = [1,2,2,3,4,4,3]
//  Output: true

function isMirror(leftTree: TreeNode101 | null, rightTree: TreeNode101 | null): boolean {
    // null check
    if(leftTree === null || rightTree === null) {
        return leftTree === rightTree; // will return false if one is null and the other is not
    }

    // value check
    if(leftTree.val !== rightTree.val) {
        return false;
    }

    // walking through children; call recursively
    return isMirror(leftTree.left, rightTree.right) && isMirror(leftTree.right, rightTree.left);
}

function isSymmetric(root: TreeNode101 | null): boolean {
    if(!root) return false;

    return isMirror(root.left, root.right); // use separate function that will call itself recursively
};