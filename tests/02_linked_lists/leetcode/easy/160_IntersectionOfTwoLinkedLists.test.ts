import IntersectionOfTwoLinkedLists, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/easy/160_IntersectionOfTwoLinkedLists";

// Utility function to create a linked list from an array
function createList(arr: number[]): ListNode<number> | null {
    let head: ListNode<number> | null = null,
        temp: ListNode<number> | null = null;
    for (const num of arr.reverse()) {
        head = { val: num, next: temp };
        temp = head;
    }
    return head;
}

// Utility function to append list B to list A at position pos
function createIntersection(
    headA: ListNode<number> | null,
    headB: ListNode<number> | null,
    pos: number,
): void {
    if (!headA || !headB || pos < 0) return;
    let tempA: ListNode<number> | null = headA;
    let count = 0;
    while (count < pos && tempA?.next) {
        tempA = tempA.next;
        count++;
    }
    let tempB: ListNode<number> | null = headB;
    while (tempB?.next) {
        tempB = tempB.next;
    }
    tempB.next = tempA;
}

describe("IntersectionOfTwoLinkedLists", () => {
    test("Example 1: Intersection exists", () => {
        const listA = createList([4, 1, 8, 4, 5]);
        const listB = createList([5, 6, 1]);
        createIntersection(listA, listB, 2); // Create intersection at node with value 8
        const intersection = IntersectionOfTwoLinkedLists(listA, listB);
        expect(intersection?.val).toBe(8);
    });

    test("Example 2: No intersection", () => {
        const listA = createList([2, 6, 4]);
        const listB = createList([1, 5]);
        const intersection = IntersectionOfTwoLinkedLists(listA, listB);
        expect(intersection).toBeNull();
    });

    test("Example 3: Intersection at head", () => {
        const listA = createList([1, 2, 3]);
        const listB = listA; // Both lists are the same
        const intersection = IntersectionOfTwoLinkedLists(listA, listB);
        expect(intersection?.val).toBe(1);
    });
});
