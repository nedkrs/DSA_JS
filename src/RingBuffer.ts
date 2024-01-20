export default class RingBuffer {
    private capacity: number;
    private size: number;
    private data: number[];
    private tail: number;
    private head: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.data = new Array(this.capacity);
        this.tail = this.head = 0;
        this.size = 0;
    }

    enqueue(item: number): void {
        if (this.size === this.capacity) {
            return;
        }
        this.data[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.size++;
    }

    dequeue(): number | void {
        if (this.isEmpty()) {
            return;
        }
        const item = this.data[this.head];
        this.head = (this.head + 1) % this.capacity;
        this.size--;

        return item;
    }

    peek(): number | undefined {
        if (this.size === 0) return undefined;
        return this.data[this.head];
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    clear(): void {
        this.data = new Array(this.capacity);
        this.tail = this.head = 0;
        this.size = 0;
    }

    display(): number[] {
        return this.data.map((it) => it);
    }
}
