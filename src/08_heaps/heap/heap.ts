export default class Heap {
    private data: number[];
    private compare: (a: number, b: number) => boolean;

    constructor(fn: (a: number, b: number) => boolean) {
        this.data = [];
        this.compare = fn;
    }

    insert(n: number): void {
        this.data[this.data.length] = n;
        this.swim(this.data.length - 1);
    }

    delete(): number {
        let out = this.data[0];
        this.swap(0, this.data.length - 1);
        this.data.pop();
        this.sink(0);
        return out;
    }

    size(): number {
        return this.data.length;
    }

    peek(): number {
        return this.data[0];
    }

    swap(idx1: number, idx2: number): void {
        [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]];
    }

    swim(idx: number): void {
        if (idx <= 0) return;

        let parentIdx = this.parentIdx(idx);
        let parentVal = this.data[parentIdx];
        let val = this.data[idx];

        if (this.compare(val, parentVal)) {
            this.swap(idx, parentIdx);
            this.swim(parentIdx);
        }
    }

    sink(idx: number): void {
        let leftChildIdx = this.leftChildIdx(idx);
        let rightChildIdx = this.rightChildIdx(idx);
        let smallest = idx;

        if (
            leftChildIdx < this.size() &&
            this.compare(this.data[leftChildIdx], this.data[smallest])
        ) {
            smallest = leftChildIdx;
        }

        if (
            rightChildIdx < this.size() &&
            this.compare(this.data[rightChildIdx], this.data[smallest])
        ) {
            smallest = rightChildIdx;
        }

        if (smallest !== idx) {
            this.swap(idx, smallest);
            this.sink(smallest);
        }
    }

    parentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    leftChildIdx(idx: number): number {
        return idx * 2 + 1;
    }

    rightChildIdx(idx: number): number {
        return idx * 2 + 2;
    }
}
