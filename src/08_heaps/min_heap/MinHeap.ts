export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(item: number): void {
        this.data[this.length] = item;
        this.swim(this.length);
        this.length++;
    }

    delete(): number | void {
        if (this.length === 0) return;

        let out = this.data[0];

        let last = this.data[this.length - 1];
        this.data[0] = last as number;

        this.length--;
        this.sink(0);

        return out;
    }

    peek(): number | undefined {
        return this.data[0];
    }

    private swim(idx: number): void {
        let parentIdx = this.getParentIdx(idx);
        let parentVal = this.data[parentIdx] as number;
        let val = this.data[idx] as number;

        if (parentVal > val) {
            this.data[parentIdx] = val;
            this.data[idx] = parentVal;
            this.swim(parentIdx);
        }
    }

    private sink(idx: number): void {
        let leftIdx = this.getLeftChildIdx(idx);
        let rightIdx = this.getRightChildIdx(idx);
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

    private getParentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private getLeftChildIdx(idx: number): number {
        return 2 * idx + 1;
    }

    private getRightChildIdx(idx: number): number {
        return 2 * idx + 2;
    }
}
