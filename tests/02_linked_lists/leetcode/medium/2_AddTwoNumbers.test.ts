import AddTwoNumbers, {
    ListNode,
} from "../../../../src/02_linked_lists/leetcode/medium/2_AddTwoNumbers";

function createLinkedList(arr: number[]) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head: ListNode) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        if (head.next !== null) head = head.next;
        else break;
    }
    return arr;
}

test("Example 1: l1 = [2,4,3], l2 = [5,6,4]", () => {
    let l1 = createLinkedList([2, 4, 3]);
    let l2 = createLinkedList([5, 6, 4]);
    let result = AddTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 0, 8]);
});

test("Example 2: l1 = [0], l2 = [0]", () => {
    let l1 = createLinkedList([0]);
    let l2 = createLinkedList([0]);
    let result = AddTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0]);
});

test("Example 3: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", () => {
    let l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
    let l2 = createLinkedList([9, 9, 9, 9]);
    let result = AddTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test("Adding different length lists", () => {
    let l1 = createLinkedList([1, 8]);
    let l2 = createLinkedList([0]);
    let result = AddTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([1, 8]);
});

test("Ensure carry is handled properly", () => {
    let l1 = createLinkedList([9]);
    let l2 = createLinkedList([1]);
    let result = AddTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 1]);
});
