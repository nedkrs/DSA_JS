export default function select_sort(arr: number[]): number[] {
    if (arr.length < 1) return arr;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        let min = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
        }

        if (min < arr[i]) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }

    return arr;
}
