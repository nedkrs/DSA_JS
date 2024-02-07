export default function getCombinations(array: number[], size: number) {
    let results: number[][] = [];
    generate(array, size, 0, [], results);
    return results;
}

function generate(
    arr: number[],
    size: number,
    i: number,
    currCombination: number[],
    results: number[][],
) {
    if (currCombination.length >= size) {
        results.push(currCombination.slice());
        return;
    }
    if (i >= arr.length) return;

    currCombination.push(arr[i]);
    generate(arr, size, i + 1, currCombination, results);
    currCombination.pop();

    generate(arr, size, i + 1, currCombination, results);
}
