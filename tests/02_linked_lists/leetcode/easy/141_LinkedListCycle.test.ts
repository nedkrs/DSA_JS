import HasCycle, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/easy/141_LinkedListCycle";

describe("HasCycle", () => {
    test("Example 1: List with a cycle", () => {
        // Manually creating the list [3,2,0,-4] with a cycle back to node with value 2
        const head: ListNode<number> = { val: 3, next: null };
        const node2: ListNode<number> = { val: 2, next: null };
        const node0: ListNode<number> = { val: 0, next: null };
        const nodeNeg4: ListNode<number> = { val: -4, next: null };
        head.next = node2;
        node2.next = node0;
        node0.next = nodeNeg4;
        nodeNeg4.next = node2; // Create a cycle back to node2

        expect(HasCycle(head)).toBe(true);
    });

    test("Example 2: List with a cycle at the start", () => {
        // Manually creating the list [1,2] with a cycle back to node with value 1
        const head: ListNode<number> = { val: 1, next: null };
        const node2: ListNode<number> = { val: 2, next: null };
        head.next = node2;
        node2.next = head; // Create a cycle back to head

        expect(HasCycle(head)).toBe(true);
    });

    test("Example 3: List without a cycle", () => {
        // Manually creating the list [1] with no cycle
        const head: ListNode<number> = { val: 1, next: null };

        expect(HasCycle(head)).toBe(false);
    });

    test("Empty list should return false", () => {
        expect(HasCycle(null)).toBe(false);
    });
});
