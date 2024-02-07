export default function GenerateSubsetsIteratively(arr: number[]): number[][] {
    let subsets: number[][] = [];
    let totalSubsets = Math.pow(2, arr.length);

    for (let i = 0; i < totalSubsets; i++) {
        let subset: number[] = [];
        for (let j = 0; j < arr.length; j++) {
            if (i & (1 << j)) subset.push(arr[j]);
        }
        subsets.push(subset);
    }

    return subsets;
}
