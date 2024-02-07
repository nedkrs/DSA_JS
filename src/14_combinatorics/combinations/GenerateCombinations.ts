export default function GenerateCombinations(array: number[], size: number) {
    let results: number[][] = [];

    function combine(startIndex: number, combination: number[]) {
        if (combination.length === size) {
            results.push(combination.slice());
            return;
        }

        for (let i = startIndex; i < array.length; i++) {
            combination.push(array[i]);
            combine(i + 1, combination);
            combination.pop();
        }
    }

    combine(0, []);

    return results;
}
