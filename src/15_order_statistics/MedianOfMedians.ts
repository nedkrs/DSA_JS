export default function medianOfMedians(
    arr: number[],
    k: number,
): number | null {
    if (k < 1 || k > arr.length) {
        return null;
    }

    if (arr.length <= 5) {
        arr.sort((a, b) => a - b);
        return arr[k - 1];
    }

    const groups = [];
    for (let i = 0; i < arr.length; i += 5) {
        groups.push(arr.slice(i, i + 5));
    }

    const medians = groups.map((group) =>
        medianOfMedians(group, Math.ceil(group.length / 2)),
    ) as number[];

    const pivot = medianOfMedians(
        medians,
        Math.ceil(medians.length / 2),
    ) as number;

    const smaller = arr.filter((element) => element < pivot);
    const equal = arr.filter((element) => element === pivot);
    const larger = arr.filter((element) => element > pivot);

    if (k <= smaller.length) {
        return medianOfMedians(smaller, k);
    } else if (k <= smaller.length + equal.length) {
        return pivot;
    } else {
        return medianOfMedians(larger, k - smaller.length - equal.length);
    }
}
