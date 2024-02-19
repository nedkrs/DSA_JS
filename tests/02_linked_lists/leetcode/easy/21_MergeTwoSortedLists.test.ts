import MergeTwoSortedLists, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/easy/21_MergeTwoSortedLists";

// Helper function to create a linked list from an array
function createList(arr: number[]): ListNode<number> | null {
    let head: ListNode<number> | null = null;
    let current: ListNode<number> | null = null;
    arr.forEach((val) => {
        if (!head) {
            head = { val, next: null };
            current = head;
        } else if (current) {
            current.next = { val, next: null };
            current = current.next;
        }
    });
    return head;
}

// Helper function to convert a linked list to an array
function listToArray(head: ListNode<number> | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

describe("MergeTwoSortedLists", () => {
    test("merges two sorted lists into one sorted list", () => {
        const list1 = createList([1, 2, 4]);
        const list2 = createList([1, 3, 4]);
        const mergedList = MergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    test("correctly handles one empty list", () => {
        const list1 = createList([]);
        const list2 = createList([0]);
        const mergedList = MergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([0]);
    });

    test("returns null for two empty lists", () => {
        const list1 = createList([]);
        const list2 = createList([]);
        const mergedList = MergeTwoSortedLists(list1, list2);
        expect(mergedList).toBeNull();
    });

    test("merges lists of different lengths", () => {
        const list1 = createList([2, 6]);
        const list2 = createList([1, 3, 5, 7]);
        const mergedList = MergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 2, 3, 5, 6, 7]);
    });
});
