export default function Permutations(array: number[], size: number) {
    let result: number[][] = [];
    generate(array, size, [], result);
    return result;
}

function generate(
    arr: number[],
    size: number,
    currPermutation: number[],
    result: number[][],
) {
    if (currPermutation.length === size) {
        result.push(currPermutation.slice());
        return;
    }

    for (let j = 0; j < arr.length; j++) {
        if (currPermutation.includes(arr[j])) continue;
        currPermutation.push(arr[j]);
        generate(arr, size, currPermutation, result);
        currPermutation.pop();
    }
}
