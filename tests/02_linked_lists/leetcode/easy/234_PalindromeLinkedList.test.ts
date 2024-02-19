import PalindromeLinkedList, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/easy/234_PalindromeLinkedList";
function createLinkedList(arr: number[]): ListNode<number> | null {
    let head: ListNode<number> | null = null,
        current: ListNode<number> | null = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        head = { val: arr[i], next: current };
        current = head;
    }
    return head;
}

describe("PalindromeLinkedList", () => {
    test("empty list", () => {
        expect(PalindromeLinkedList(null)).toBe(true);
    });

    test("single element", () => {
        const list = createLinkedList([1]);
        expect(PalindromeLinkedList(list)).toBe(true);
    });

    test("even number of elements, palindrome", () => {
        const list = createLinkedList([1, 2, 2, 1]);
        expect(PalindromeLinkedList(list)).toBe(true);
    });

    test("even number of elements, not palindrome", () => {
        const list = createLinkedList([1, 2, 3, 4]);
        expect(PalindromeLinkedList(list)).toBe(false);
    });

    test("odd number of elements, palindrome", () => {
        const list = createLinkedList([1, 2, 3, 2, 1]);
        expect(PalindromeLinkedList(list)).toBe(true);
    });

    test("odd number of elements, not palindrome", () => {
        const list = createLinkedList([1, 2, 3, 4, 5]);
        expect(PalindromeLinkedList(list)).toBe(false);
    });
});
