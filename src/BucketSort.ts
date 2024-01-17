import insertion_sort from "./InsertionSort";

export default function BucketSort(arr: number[]): number[] {
    let k = Math.floor(arr.length / 10);
    let buckets = new Array(k);

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const pos = Math.floor(element / k);
        buckets[pos].push(element);
    }

    for (let i = 0; i < k; i++) {
        buckets[i] = insertion_sort(buckets[i]);
    }

    return buckets.flatMap((elements) => elements);
}
