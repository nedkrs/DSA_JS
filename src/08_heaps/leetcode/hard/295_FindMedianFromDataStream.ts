// The median is the middle value in an ordered integer list. If the size of the list is even,
// there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far.
// Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

// Hard: https://leetcode.com/problems/find-median-from-data-stream/description/

export default class MedianFinder {
    private bigger: Heap;
    private smaller: Heap;

    constructor() {
        this.bigger = new Heap((a: number, b: number) => a < b); // min heap
        this.smaller = new Heap((a: number, b: number) => a > b); // max heap
    }

    addNum(num: number): void {
        if (this.smaller.size() === 0 || num <= this.smaller.peek()) {
            this.smaller.insert(num);
        } else {
            this.bigger.insert(num);
        }

        if (this.smaller.size() > this.bigger.size() + 1) {
            this.bigger.insert(this.smaller.delete());
        } else if (this.bigger.size() > this.smaller.size()) {
            this.smaller.insert(this.bigger.delete());
        }
    }

    findMedian(): number {
        return this.bigger.size() === this.smaller.size()
            ? (this.bigger.peek() + this.smaller.peek()) / 2
            : this.smaller.peek();
    }
}

class Heap {
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
