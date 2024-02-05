export default function generateSubsetsRecursively(arr: number[]): number[][] {
    let subsets: number[][] = [];
    generate(0, subsets, [], arr);
    return subsets;
}

function generate(
    i: number,
    subsets: number[][],
    currSubset: number[],
    arr: number[],
) {
    if (i >= arr.length) {
        subsets.push(currSubset.slice());
        return;
    }

    currSubset.push(arr[i]);
    generate(i + 1, subsets, currSubset, arr);
    currSubset.pop();

    generate(i + 1, subsets, currSubset, arr);
}

console.log(generateSubsetsRecursively([1, 2, 3]));
