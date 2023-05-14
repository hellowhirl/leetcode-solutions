// 108-sorted-array-to-binary

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Input: nums = [-10,-3,0,5,9]

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // base case: check if nums passed is empty
    if(nums.length == 0) return null

    // find the middle number
    const middle = Math.floor( nums.length/ 2)
    
    // create a new tree node to insert the middle number
    const treeNode = new TreeNode(nums[middle])

    // set left and right nodes of the tree as remaining halves of numbers in nums array
    treeNode.left = sortedArrayToBST(nums.slice(0, middle))
    treeNode.right = sortedArrayToBST(nums.slice(middle + 1))

    // return the inital tree node that was set in beginning
    return treeNode;
};

const testNums1 = [-10,-3,0,5,9];
const testNums2 = [0,1,2,3,4,5];

sortedArrayToBST(testNums2);