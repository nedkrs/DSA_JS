import MinStack from "../../../../src/03_stack/leetcode/medium/155_MinStack";

describe("MinStack", () => {
    let minStack: MinStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    test("push and top", () => {
        minStack.push(5);
        expect(minStack.top()).toBe(5);
        minStack.push(3);
        expect(minStack.top()).toBe(3);
    });

    test("pop", () => {
        minStack.push(5);
        minStack.push(3);
        minStack.pop();
        expect(minStack.top()).toBe(5);
    });

    test("getMin with consecutive smaller elements", () => {
        minStack.push(5);
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
        minStack.push(2);
        expect(minStack.getMin()).toBe(2);
    });

    test("getMin with consecutive larger elements", () => {
        minStack.push(2);
        expect(minStack.getMin()).toBe(2);
        minStack.push(3);
        expect(minStack.getMin()).toBe(2);
        minStack.push(5);
        expect(minStack.getMin()).toBe(2);
    });

    test("getMin after popping smallest element", () => {
        minStack.push(2);
        minStack.push(3);
        minStack.push(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(2);
    });

    test("getMin returns Infinity for empty stack", () => {
        expect(minStack.getMin()).toBe(Infinity);
    });

    test("maintains correct min after various operations", () => {
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3);
        minStack.pop();
        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });
});
