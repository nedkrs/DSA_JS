// Given the head of a singly linked list, return true if it is a palindrome
//  or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

// Easy: https://leetcode.com/problems/palindrome-linked-list/description/

export type ListNode<T> = {
    val: T;
    next: ListNode<T> | null;
};

export default function PalindromeLinkedList(
    head: ListNode<number> | null,
): boolean {
    let fast = head,
        slow = head,
        prev: ListNode<number> | null = null,
        temp: ListNode<number> | null = null;

    // Find the midpoint (slow) and reverse the first half
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;

        // Reverse
        temp = slow!.next;
        slow!.next = prev;
        prev = slow;
        slow = temp;
    }

    // If odd number of elements, skip the middle element
    if (fast !== null) {
        slow = slow!.next;
    }

    // Compare the two halves
    while (prev !== null && slow !== null) {
        if (prev.val !== slow.val) {
            return false;
        }
        prev = prev.next;
        slow = slow.next;
    }

    return true;
}
