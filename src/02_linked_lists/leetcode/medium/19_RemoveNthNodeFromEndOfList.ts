// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

// Medium: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function RemoveNthNodeFromEndOfList(
    head: ListNode | null,
    n: number,
) {
    let dummy: ListNode | null = new ListNode(0);
    dummy.next = head;
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast?.next || null;
    }

    while (fast !== null) {
        slow = slow?.next || null;
        fast = fast?.next || null;
    }

    slow!.next = slow!.next!.next;

    return dummy.next;
}
