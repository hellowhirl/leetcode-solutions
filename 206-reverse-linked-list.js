// 205. Reverse Linked List

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
var reverseList = function (head) {
  let previous = null;

  while (head !== null) {
    const savedNext = head.next;
    head.next = previous;
    previous = head;
    head = savedNext;
  }

  return previous;
};

// 1 -> 2 -> 3 -> null
// use 3 pointers:  previous , head , next
// null <- 1 <- 2 <- 3

const prompt = `

Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
`;
