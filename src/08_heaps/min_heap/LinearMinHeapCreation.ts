export default class LinearMinHeapBuild<T> {
    public data: T[];
    public length: number;

    constructor(items: T[] = []) {
        this.data = items;
        this.length = items.length;
        this.buildHeap();
    }

    private buildHeap(): void {
        for (let i = Math.floor(this.length / 2) - 1; i >= 0; i--) {
            this.sink(i);
        }
    }

    private sink(idx: number): void {
        let leftIdx = this.leftChildIdx(idx);
        let rightIdx = this.rightChildIdx(idx);
        let smallest = idx;

        // Check if left child is smaller than current node
        if (leftIdx < this.length && this.data[leftIdx] < this.data[smallest]) {
            smallest = leftIdx;
        }

        // Check if right child is smaller than the smallest so far
        if (
            rightIdx < this.length &&
            this.data[rightIdx] < this.data[smallest]
        ) {
            smallest = rightIdx;
        }

        // If the smallest is not the current node, swap and continue sinking
        if (smallest !== idx) {
            [this.data[idx], this.data[smallest]] = [
                this.data[smallest],
                this.data[idx],
            ];
            this.sink(smallest);
        }
    }

    private leftChildIdx(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChildIdx(idx: number): number {
        return idx * 2 + 2;
    }
}
