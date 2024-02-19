import RemoveNthNodeFromEndOfList, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/medium/19_RemoveNthNodeFromEndOfList";

function arrayToList(arr: number[]): ListNode | null {
    let head: ListNode | null = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], head);
    }
    return head;
}

function listToArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

describe("RemoveNthNodeFromEndOfList", () => {
    test("removing the head of the list", () => {
        const list = arrayToList([1, 2, 3, 4, 5]);
        const updatedList = RemoveNthNodeFromEndOfList(list, 5);
        expect(listToArray(updatedList)).toEqual([2, 3, 4, 5]);
    });

    test("removing the last node of the list", () => {
        const list = arrayToList([1, 2, 3, 4, 5]);
        const updatedList = RemoveNthNodeFromEndOfList(list, 1);
        expect(listToArray(updatedList)).toEqual([1, 2, 3, 4]);
    });

    test("removing a node from the middle of the list", () => {
        const list = arrayToList([1, 2, 3, 4, 5]);
        const updatedList = RemoveNthNodeFromEndOfList(list, 2);
        expect(listToArray(updatedList)).toEqual([1, 2, 3, 5]);
    });

    test("edge case with a single-node list", () => {
        const list = arrayToList([1]);
        const updatedList = RemoveNthNodeFromEndOfList(list, 1);
        expect(listToArray(updatedList)).toEqual([]);
    });

    test("edge case where n is equal to the length of the list", () => {
        const list = arrayToList([1, 2]);
        const updatedList = RemoveNthNodeFromEndOfList(list, 2);
        expect(listToArray(updatedList)).toEqual([2]);
    });
});
