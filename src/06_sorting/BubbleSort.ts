export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let current = arr[j] as number;
            let next = arr[j + 1] as number;
            if (next < current) {
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }
}
