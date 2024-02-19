type Node = {
    key: number;
    value: string;
};

export default function CountingSort(array: Node[]): Node[] {
    let k = -Infinity;
    for (let i = 0; i < array.length; i++) {
        k = Math.max(array[i].key, k);
    }

    let counts = new Array(k + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
        counts[array[i].key] = counts[array[i].key] + 1;
    }

    let cumSum: number[] = [counts[0]];
    for (let i = 1; i < counts.length; i++) {
        cumSum[i] = counts[i] + cumSum[i - 1];
    }

    let output: Node[] = new Array(array.length).fill(null);
    for (let i = array.length - 1; i >= 0; i--) {
        output[cumSum[array[i].key] - 1] = array[i];
        cumSum[array[i].key] = cumSum[array[i].key] - 1;
    }

    return output;
}
