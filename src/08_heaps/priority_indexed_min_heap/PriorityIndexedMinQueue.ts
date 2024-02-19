export default class PriorityIndexedMinQueue<T> {
    public length: number;
    private elements: number[]; // elements = [4, 5, 6] stores priorities for identifiers
    private priorityQueue: number[]; // priorityQueue = [0, 1, 2] stores identifiers for indexes
    private queuePosition: number[]; // queuePosition = [0, 1, 2] stores indexes for identifiers

    constructor() {
        this.length = 0;
        this.elements = [];
        this.priorityQueue = [];
        this.queuePosition = [];
    }

    insert(identifier: number, priority: number): void {
        if (this.contains(identifier)) return;

        this.elements[identifier] = priority;
        this.priorityQueue[this.length] = identifier;
        this.queuePosition[identifier] = this.length;
        this.swim(this.length);
        this.length++;
    }

    deleteMinimum(): number {
        if (this.length === 0) return -1;

        const out = this.priorityQueue[0];

        this.length--;

        if (this.length === 0) {
            this.elements = [];
            this.priorityQueue = [];
            this.queuePosition = [];
            return out;
        }

        this.swap(0, this.length);
        this.sink(0);

        return out;
    }

    decreaseKey(identifier: number, priority: number): void {
        if (!this.contains(identifier)) return;
        if (this.elements[identifier] < priority) return;

        this.elements[identifier] = priority;
        this.swim(this.queuePosition[identifier]);
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    size(): number {
        return this.length;
    }

    contains(identifier: number): boolean {
        return this.elements[identifier] !== undefined;
    }

    private swim(idx: number): void {
        if (idx <= 0 || idx > this.length) {
            return;
        }

        let priority = this.getPriority(idx);
        let parentIdx = this.parentIdx(idx);
        let parentPriority = this.getPriority(parentIdx);

        if (priority < parentPriority) {
            this.swap(idx, parentIdx);
            this.swim(parentIdx);
        }
    }

    private sink(idx: number): void {
        let leftChildIdx = this.leftChildIdx(idx);
        let rightChildIdx = this.rightChildIdx(idx);
        let smallest = idx;

        if (
            leftChildIdx < this.length &&
            this.getPriority(leftChildIdx) < this.getPriority(smallest)
        ) {
            smallest = leftChildIdx;
        }

        if (
            rightChildIdx < this.length &&
            this.getPriority(rightChildIdx) < this.getPriority(smallest)
        ) {
            smallest = rightChildIdx;
        }

        if (smallest !== idx) {
            this.swap(smallest, idx);
            this.sink(smallest);
        }
    }

    private swap(idx: number, jdx: number): void {
        let identifier = this.priorityQueue[idx];
        let jdentifier = this.priorityQueue[jdx];

        [this.queuePosition[identifier], this.queuePosition[jdentifier]] = [
            this.queuePosition[jdentifier],
            this.queuePosition[identifier],
        ];
        [this.priorityQueue[idx], this.priorityQueue[jdx]] = [
            this.priorityQueue[jdx],
            this.priorityQueue[idx],
        ];
    }

    getPriority(idx: number): number {
        return this.elements[this.priorityQueue[idx]];
    }

    private parentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChildIdx(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChildIdx(idx: number): number {
        return idx * 2 + 2;
    }
}
