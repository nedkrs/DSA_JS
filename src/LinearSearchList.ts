export default function linear_search(arr: number[], val: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
