export default function Permutations(array: number[], size: number) {
    let result: number[][] = [];

    function permute(arr: number[], currPermutation: number[] = []) {
        if (currPermutation.length === size) {
            result.push(currPermutation);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let currArr = arr.slice();
            let nextItem = currArr.splice(i, 1);
            permute(currArr, currPermutation.concat(nextItem));
        }
    }

    permute(array);

    return result;
}
