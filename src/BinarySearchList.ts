export default function binary_search_list(
    arr: number[],
    val: number,
): boolean {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let curr = arr[mid] as number;

        if (curr === val) {
            return true;
        } else if (curr > val) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}
