// 234. Palindrome Linked List

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean {
    const list: number[] = []
    let currentNode = head

    while (currentNode !== null) {
        list.push(currentNode.val)
        currentNode = currentNode.next
    }

    let anotherNode = head

    for (let i = list.length - 1; i >= 0; i--) {
        if (anotherNode === null) break
        if (list[i] !== anotherNode.val) {
            return false
        }
        anotherNode = anotherNode.next
    }

    return true
};

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false