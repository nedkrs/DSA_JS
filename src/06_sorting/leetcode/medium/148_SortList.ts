// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

// Medium: https://leetcode.com/problems/sort-list/description/

export class ListNode<T> {
    val: number;
    next: ListNode<T> | null;
    constructor(val?: number, next?: ListNode<T> | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export default function SortList(
    head: ListNode<number> | null,
): ListNode<number> | null {
    return divide(head);
}

function divide(node: ListNode<number> | null): ListNode<number> | null {
    if (!node) return null;
    if (node.next === null) return node;

    let fast: ListNode<number> | null = node;
    let slow: ListNode<number> | null = node;
    let prev: ListNode<number> | null = node;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }
    prev!.next = null;

    let left: ListNode<number> | null = divide(node);
    let right: ListNode<number> | null = divide(slow);

    return merge(left, right);
}

function merge(
    l: ListNode<number> | null,
    r: ListNode<number> | null,
): ListNode<number> | null {
    let tmp: ListNode<number> = { val: 0, next: null };
    let head: ListNode<number> = tmp;

    while (l !== null || r !== null) {
        if (l === null) {
            tmp.next = r;
            break;
        } else if (r === null) {
            tmp.next = l;
            break;
        } else if (l.val < r.val) {
            tmp.next = l;
            l = l.next;
        } else {
            tmp.next = r;
            r = r.next;
        }
        tmp = tmp.next;
    }

    return head.next;
}
