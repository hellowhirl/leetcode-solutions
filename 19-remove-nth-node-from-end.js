// 19. Remove Nth Node From End of List

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function removeNthFromEnd(head) {
  if (head.next === null) return head.next;

  let pointer1 = head;
  let pointer2 = head;
  let prev1 = new ListNode();
  let prev2 = new ListNode();

  while (n > 0) {
    pointer1 = pointer1.next;
    n--;
  }

  if (pointer1 === null) {
    return head.next;
  }

  while (pointer1) {
    prev1 = pointer1;
    pointer1 = pointer1.next;
    prev2 = pointer2;
    pointer2 = pointer2.next;
  }

  prev2.next = prev2.next.next;

  return head;
}

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
