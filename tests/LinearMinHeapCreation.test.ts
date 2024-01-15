import LinearMinHeap from "../src/LinearMinHeapCreation";

test("linear min heap", function () {
    const heap = new LinearMinHeap<number>([4, 51, 23, 1, 555, 14]);

    for (let i = 0; i < heap.data.length; i++) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < heap.data.length) {
            expect(heap.data[i]).toBeLessThanOrEqual(heap.data[left]);
        }
        if (right < heap.data.length) {
            expect(heap.data[i]).toBeLessThanOrEqual(heap.data[right]);
        }
    }
});
