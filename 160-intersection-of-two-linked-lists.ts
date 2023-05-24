// 160. Intersection of Two Linked Lists

//  Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) {
        return null
    }

    let pointer1: ListNode | null = headA
    let pointer2: ListNode | null = headB

    // do this until we get to the end of both ListNodes
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next

        if (pointer1 === pointer2) {
            return pointer1 || pointer2
        }

        // reset to begininning of other node
        if (pointer1 === null) {
            pointer1 = headB
        }

        // reset to begininning of other node
        if (pointer2 === null) {
            pointer2 = headA
        }
    }

    return pointer2 // or pointer1, will be the same when null
};