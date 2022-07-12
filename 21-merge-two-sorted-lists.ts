class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(); // default to 0
  const head = dummy;

  while (list1 && list2) {
    if (list1.val < list2!.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next; // move up dummy list node
  }

  // point dummy's next list node to beginning of other list node
  if (list1 === null) dummy.next = list2;
  else {
    dummy.next = list1;
  }

  return head.next; // a reference to our beginning dummy list node
}
