import MinHeap from "./MinHeap";

export default function heap_sort(arr: number[]) {
    let heap = new MinHeap();

    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
    }

    let sorted: number[] = [];

    while (heap.length > 0) {
        sorted.push(heap.delete() as number);
    }

    return sorted;
}
