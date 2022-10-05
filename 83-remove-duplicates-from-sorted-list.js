// 83. Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head; // from here

  // break out of the loop if the next node is null
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head; // some how 'head' will be left untouched as a reference to the beginning
  // And 'current' is an independent marker that will travel through the linked list and change references tor next values until it reaches the end.
};

const prompt83 = `

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 
Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
`;
