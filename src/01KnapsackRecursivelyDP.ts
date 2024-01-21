export default function KnapsackRecursivelyDP(
    v: number[],
    w: number[],
    W: number,
): number {
    let dp = new Array(v.length + 1);
    for (let i = 0; i <= v.length; i++) {
        dp[i] = new Array(W + 1).fill(undefined);
    }

    knapsack(v, w, W, v.length, dp);

    return dp[v.length][W];
}

function knapsack(
    v: number[],
    w: number[],
    W: number,
    n: number,
    dp: number[][],
): number {
    if (dp[n][W] !== undefined) return dp[n][W];

    if (n === 0 || W === 0) return 0;

    if (w[n - 1] > W) {
        dp[n][W] = knapsack(v, w, W, n - 1, dp);
        return dp[n][W];
    }

    let include = v[n - 1] + knapsack(v, w, W - w[n - 1], n - 1, dp);
    let exclude = knapsack(v, w, W, n - 1, dp);

    dp[n][W] = Math.max(include, exclude);

    return dp[n][W];
}
