import ReverseLinkedList, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/easy/206_ReverseLinkedList";

function createList(arr: number[]): ListNode<number> | null {
    let head: ListNode<number> | null = null;
    let tail: ListNode<number> | null = null;

    arr.forEach((val) => {
        const newNode: ListNode<number> = { val, next: null };
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail!.next = newNode;
            tail = newNode;
        }
    });

    return head;
}

function listToArray(head: ListNode<number> | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

describe("ReverseLinkedList", () => {
    test("Example 1: head = [1,2,3,4,5]", () => {
        const head = createList([1, 2, 3, 4, 5]);
        const reversedHead = ReverseLinkedList(head);
        expect(listToArray(reversedHead)).toEqual([5, 4, 3, 2, 1]);
    });

    test("Example 2: head = [1,2]", () => {
        const head = createList([1, 2]);
        const reversedHead = ReverseLinkedList(head);
        expect(listToArray(reversedHead)).toEqual([2, 1]);
    });

    test("Example 3: head = []", () => {
        const head = createList([]);
        const reversedHead = ReverseLinkedList(head);
        expect(listToArray(reversedHead)).toEqual([]);
    });

    test("Single node list", () => {
        const head = createList([1]);
        const reversedHead = ReverseLinkedList(head);
        expect(listToArray(reversedHead)).toEqual([1]);
    });

    test("List with negative values", () => {
        const head = createList([-3, -2, -1, 0]);
        const reversedHead = ReverseLinkedList(head);
        expect(listToArray(reversedHead)).toEqual([0, -1, -2, -3]);
    });
});
