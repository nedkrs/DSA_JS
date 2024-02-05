export default function KnapsackBottomUpDP(
    v: number[],
    w: number[],
    W: number,
): number {
    let dp = new Array(v.length + 1);
    for (let i = 0; i <= v.length; i++) {
        dp[i] = new Array(W + 1).fill(0);
    }

    for (let i = 1; i <= v.length; i++) {
        for (let j = 0; j <= W; j++) {
            if (w[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i - 1][j - w[i - 1]] + v[i - 1],
                );
            }
        }
    }

    return dp[v.length][W];
}
