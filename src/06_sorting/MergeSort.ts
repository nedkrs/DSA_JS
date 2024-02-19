export default function merge_sort(arr: number[]): number[] {
    return divide(arr);
}

function divide(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    let mid = Math.floor((0 + arr.length) / 2);

    let left = divide(arr.slice(0, mid));
    let right = divide(arr.slice(mid));

    return conquer(left, right);
}

function conquer(A: number[], B: number[]): number[] {
    let A_len = A.length;
    let B_len = B.length;
    let merged: number[] = [];
    let i = 0;
    let j = 0;

    while (A_len + B_len !== merged.length) {
        let A_val = A[i] as number;
        let B_val = B[j] as number;
        if (A_val <= B_val || j === B.length) {
            merged.push(A_val);
            i++;
        } else {
            merged.push(B_val);
            j++;
        }
    }

    return merged;
}
