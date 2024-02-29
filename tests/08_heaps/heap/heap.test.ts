import Heap from "../../../src/08_heaps/heap/heap";

describe("Heap", () => {
    describe("Min Heap", () => {
        let minHeap: Heap;

        beforeEach(() => {
            minHeap = new Heap((a, b) => a < b);
        });

        test("should insert and maintain min heap property", () => {
            minHeap.insert(3);
            minHeap.insert(1);
            minHeap.insert(2);
            expect(minHeap.peek()).toBe(1);
        });

        test("should delete and maintain min heap property", () => {
            minHeap.insert(3);
            minHeap.insert(1);
            minHeap.insert(2);
            expect(minHeap.delete()).toBe(1);
            expect(minHeap.peek()).toBe(2);
        });

        test("should return correct size", () => {
            minHeap.insert(3);
            minHeap.insert(1);
            expect(minHeap.size()).toBe(2);
            minHeap.delete();
            expect(minHeap.size()).toBe(1);
        });
    });

    describe("Max Heap", () => {
        let maxHeap: Heap;

        beforeEach(() => {
            maxHeap = new Heap((a, b) => a > b);
        });

        test("should insert and maintain max heap property", () => {
            maxHeap.insert(1);
            maxHeap.insert(3);
            maxHeap.insert(2);
            expect(maxHeap.peek()).toBe(3);
        });

        test("should delete and maintain max heap property", () => {
            maxHeap.insert(1);
            maxHeap.insert(3);
            maxHeap.insert(2);
            expect(maxHeap.delete()).toBe(3);
            expect(maxHeap.peek()).toBe(2);
        });

        test("should return correct size", () => {
            maxHeap.insert(3);
            maxHeap.insert(1);
            expect(maxHeap.size()).toBe(2);
            maxHeap.delete();
            expect(maxHeap.size()).toBe(1);
        });
    });
});
