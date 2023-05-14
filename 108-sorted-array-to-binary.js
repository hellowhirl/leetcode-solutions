// var TreeNode = /** @class */ (function () {
//     function TreeNode(val, left, right) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
//     return TreeNode;
// }());
// // Input: nums = [-10,-3,0,5,9]
// function sortedArrayToBST(nums) {
//     // base case: check if nums passed is empty
//     if (nums.length == 0)
//         return null;
//     // find the middle point
//     var middle = Math.floor(nums.length / 2);
//     // create a new tree node
//     var treeNode = new TreeNode(nums[middle]);
//     // set right and left nodes of the tree
//     treeNode.left = sortedArrayToBST(nums.slice(0, middle));
//     treeNode.right = sortedArrayToBST(nums.slice(middle + 1));
//     return treeNode;
// }
// ;
// var testNums1 = [-10, -3, 0, 5, 9];
// var testNums2 = [0, 1, 2, 3, 4, 5];
// sortedArrayToBST(testNums2);
