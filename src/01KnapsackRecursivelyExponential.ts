export default function KnapsackRecursivelyExponential(
    v: number[],
    w: number[],
    W: number,
): number {
    return knapsack(v, w, W, v.length);
}

function knapsack(v: number[], w: number[], W: number, n: number): number {
    if (n === 0 || W === 0) return 0;

    if (w[n - 1] > W) return knapsack(v, w, W, n - 1);

    let include = v[n - 1] + knapsack(v, w, W - w[n - 1], n - 1);
    let exclude = knapsack(v, w, W, n - 1);

    return Math.max(include, exclude);
}
