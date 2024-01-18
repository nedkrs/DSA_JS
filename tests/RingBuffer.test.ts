import RingBuffer from "../src/RingBuffer";

describe("RingBuffer", () => {
    let buffer: RingBuffer;

    beforeEach(() => {
        buffer = new RingBuffer(3);
    });

    test("constructor initializes with correct values", () => {
        expect(buffer.isEmpty()).toBe(true);
        expect(buffer.isFull()).toBe(false);
        expect(buffer.peek()).toBeUndefined();
    });

    test("enqueue adds items to the buffer", () => {
        buffer.enqueue(1);
        expect(buffer.peek()).toBe(1);
        expect(buffer.isFull()).toBe(false);
        expect(buffer.isEmpty()).toBe(false);

        buffer.enqueue(2);
        buffer.enqueue(3);
        expect(buffer.isFull()).toBe(true);
        expect(() => buffer.enqueue(4)).not.toThrow();
        expect(buffer.isFull()).toBe(true);
    });

    test("dequeue removes items from the buffer", () => {
        buffer.enqueue(1);
        buffer.enqueue(2);

        expect(buffer.dequeue()).toBe(1);
        expect(buffer.isEmpty()).toBe(false);

        expect(buffer.dequeue()).toBe(2);
        expect(buffer.isEmpty()).toBe(true);
        expect(buffer.dequeue()).toBeUndefined();
    });

    test("peek returns the first item without removing it", () => {
        buffer.enqueue(1);
        buffer.enqueue(2);

        expect(buffer.peek()).toBe(1);
        buffer.dequeue();
        expect(buffer.peek()).toBe(2);
    });

    test("isFull returns true when the buffer is full", () => {
        buffer.enqueue(1);
        buffer.enqueue(2);
        buffer.enqueue(3);

        expect(buffer.isFull()).toBe(true);
        buffer.dequeue();
        expect(buffer.isFull()).toBe(false);
    });

    test("isEmpty returns true when the buffer is empty", () => {
        expect(buffer.isEmpty()).toBe(true);
        buffer.enqueue(1);
        buffer.dequeue();
        expect(buffer.isEmpty()).toBe(true);
    });

    test("clear empties the buffer", () => {
        buffer.enqueue(1);
        buffer.enqueue(2);
        buffer.clear();

        expect(buffer.isEmpty()).toBe(true);
        expect(buffer.isFull()).toBe(false);
    });

    test("wrap-around logic works correctly", () => {
        buffer.enqueue(1);
        buffer.enqueue(2);
        buffer.enqueue(3);
        expect(buffer.isFull()).toBe(true);
        expect(buffer.dequeue()).toBe(1);

        expect(buffer.isFull()).toBe(false);

        buffer.enqueue(4);
        expect(buffer.isFull()).toBe(true);

        expect(buffer.dequeue()).toBe(2);
        expect(buffer.dequeue()).toBe(3);
        expect(buffer.dequeue()).toBe(4);
        expect(buffer.isEmpty()).toBe(true);
    });

    test("display method shows the buffer content", () => {
        buffer.enqueue(1);
        buffer.enqueue(2);
        expect(buffer.display()).toEqual([1, 2, undefined]);

        buffer.clear();
        expect(buffer.display()).toEqual([undefined, undefined, undefined]);
    });
});
