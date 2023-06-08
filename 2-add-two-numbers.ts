// 2. Add Two Numbers

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let carryOver = 0;
  let p1 = l1;
  let p2 = l2;
  let current = dummy;

  // ||: as long as either one of our nodes has a .next node, then we'll keep iterating
  while (p1 !== null || p2 !== null) {
    let addCarryOver = 0;
    let p1val = 0;
    let p2val = 0;

    p1val = p1 ? p1.val : p1val;
    p2val = p2 ? p2.val : p2val;

    if (carryOver) {
      addCarryOver = 1;
      carryOver = 0;
    }

    const sumOfNumbers = p1val + p2val + addCarryOver;

    current.next = new ListNode(sumOfNumbers % 10);
    carryOver = p1val + p2val + addCarryOver >= 10 ? 1 : 0;

    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
    current = current.next;
  }

  if (carryOver > 0) {
    current.next = new ListNode(carryOver);
  }

  return dummy.next;
}
