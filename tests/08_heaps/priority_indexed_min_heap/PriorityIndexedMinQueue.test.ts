import PriorityIndexedMinQueue from "../../../src/08_heaps/priority_indexed_min_heap/PriorityIndexedMinQueue";

describe("PriorityIndexedMinQueue Tests", () => {
    test("heap should be initially empty", () => {
        const heap = new PriorityIndexedMinQueue();
        expect(heap.isEmpty()).toBe(true);
        expect(heap.size()).toBe(0);
    });

    test("insert elements and check size", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 4);
        heap.insert(1, 5);
        heap.insert(2, 6);
        expect(heap.isEmpty()).toBe(false);
        expect(heap.size()).toBe(3);
    });

    test("delete minimum element", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 4);
        heap.insert(1, 2);
        heap.insert(2, 6);
        expect(heap.deleteMinimum()).toBe(1); // Identifier 1 has the smallest priority
        expect(heap.size()).toBe(2);
    });

    test("decrease key of an element", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 5);
        heap.insert(1, 3);
        heap.insert(2, 4);
        heap.decreaseKey(0, 2); // Decrease priority of identifier 0 to 2
        expect(heap.deleteMinimum()).toBe(0); // Now, identifier 0 should have the lowest priority
    });

    test("decrease key to the same value", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 3);
        heap.decreaseKey(0, 3); // Decrease priority to the same value
        expect(heap.deleteMinimum()).toBe(0); // Should still return identifier 0
    });

    test("decrease key to a higher value should have no effect", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 2);
        heap.insert(1, 5);
        heap.decreaseKey(0, 4); // Attempt to increase priority, which should have no effect
        expect(heap.deleteMinimum()).toBe(0); // Identifier 0 should still be the minimum
    });

    test("decrease key on non-existent identifier should have no effect", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 3);
        heap.decreaseKey(1, 2); // Identifier 1 does not exist
        expect(heap.size()).toBe(1);
        expect(heap.contains(1)).toBe(false);
    });

    test("multiple decreaseKey operations", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 5);
        heap.insert(1, 3);
        heap.insert(2, 4);
        heap.decreaseKey(2, 2); // Decrease priority of identifier 2
        heap.decreaseKey(0, 1); // Decrease priority of identifier 0
        expect(heap.deleteMinimum()).toBe(0); // Identifier 0 should be the minimum now
        expect(heap.deleteMinimum()).toBe(2); // Then identifier 2
    });

    test("decrease key and delete minimum", () => {
        const heap = new PriorityIndexedMinQueue();
        heap.insert(0, 4);
        heap.insert(1, 5);
        heap.insert(2, 6);
        heap.decreaseKey(2, 1); // Decrease key of identifier 2 to be the smallest
        expect(heap.deleteMinimum()).toBe(2);
    });

    test("delete minimum from empty heap", () => {
        const heap = new PriorityIndexedMinQueue();
        expect(heap.deleteMinimum()).toBe(-1); // Should return -1 or handle empty case appropriately
    });
});
