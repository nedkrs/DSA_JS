export default function quick_select(arr: number[], k: number): number {
    return qs(arr, k - 1, 0, arr.length - 1);
}

function qs(arr: number[], k: number, low: number, high: number): number {
    if (low >= high) return arr[low];

    let pivotIdx = partition(arr, low, high);

    if (pivotIdx === k) {
        return arr[pivotIdx];
    } else if (pivotIdx > k) {
        return qs(arr, k, low, pivotIdx - 1);
    } else {
        return qs(arr, k, pivotIdx + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high];
    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            let tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}
