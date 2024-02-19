export default function insertion_sort(arr: number[]): number[] {
    if (arr.length < 1) return arr;

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;

        for (; j >= 0 && arr[j] > curr; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = curr;
    }

    return arr;
}
