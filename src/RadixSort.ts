import Queue from "./Queue";

export default function RadixSort(arr: number[]): number[] {
    let buckets = initBuckets(10);
    let maxLenNum = Math.max(...arr).toString().length;

    for (let i = 0; i < maxLenNum; i++) {
        for (let j = 0; j < arr.length; j++) {
            let strNum = arr[j].toString();
            let pos = strNum.length - 1 - i;
            let digit = strNum[pos] || "0";
            buckets[Number(digit)].enqueue(arr[j]);
        }

        arr = [];

        for (let j = 0; j < buckets.length; j++) {
            while (buckets[j].peek() !== undefined) {
                let tmp = buckets[j].deque();
                arr.push(tmp);
            }
        }

        buckets = initBuckets(10);
    }

    return arr;
}

function initBuckets(size: number) {
    let buckets = new Array(size);

    for (let i = 0; i < size; i++) {
        buckets[i] = new Queue();
    }

    return buckets;
}
