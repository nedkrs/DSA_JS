export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) return;

    const partitionIdx = partition(arr, low, high);

    qs(arr, low, partitionIdx - 1);
    qs(arr, partitionIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high] as number;
    let idx = low - 1;
    let i = low;

    for (i; i < high; i++) {
        let curr = arr[i] as number;
        if (curr <= pivot) {
            idx++;
            arr[i] = arr[idx] as number;
            arr[idx] = curr;
        }
    }

    idx++;
    arr[high] = arr[idx] as number;
    arr[idx] = pivot;

    return idx;
}
