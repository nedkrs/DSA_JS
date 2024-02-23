import SortList, {
    ListNode,
} from "../../../../src/06_sorting/leetcode/medium/148_SortList";

function arrayToList(arr: number[]) {
    let head = null,
        temp = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], temp);
        temp = head;
    }
    return head;
}

function listToArray(node: ListNode<number> | null) {
    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

describe("SortList", () => {
    test("sorts an empty list", () => {
        expect(SortList(null)).toBeNull();
    });

    test("sorts a single-element list", () => {
        const list = new ListNode(1);
        const sortedList = SortList(list);
        expect(listToArray(sortedList)).toEqual([1]);
    });

    test("sorts a list with multiple elements", () => {
        const list = arrayToList([4, 2, 1, 3]);
        const sortedList = SortList(list);
        expect(listToArray(sortedList)).toEqual([1, 2, 3, 4]);
    });

    test("sorts a list with negative and positive elements", () => {
        const list = arrayToList([-1, 5, 3, 4, 0]);
        const sortedList = SortList(list);
        expect(listToArray(sortedList)).toEqual([-1, 0, 3, 4, 5]);
    });

    test("sorts a list with duplicate elements", () => {
        const list = arrayToList([5, 1, 4, 2, 2]);
        const sortedList = SortList(list);
        expect(listToArray(sortedList)).toEqual([1, 2, 2, 4, 5]);
    });
});
