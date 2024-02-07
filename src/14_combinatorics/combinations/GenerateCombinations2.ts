export default function GenerateCombinations(array: number[], size: number) {
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

    for (let j = i; j < arr.length; j++) {
        currCombination.push(arr[j]);
        generate(arr, size, j + 1, currCombination, results);
        currCombination.pop();
    }
}
