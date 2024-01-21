export default function CoinChange(
    denominations: number[],
    value: number,
): number {
    let dp = new Array(value + 1).fill(0);

    for (let i = 1; i < dp.length; i++) {
        let min = Infinity;

        for (let j = 0; j < denominations.length; j++) {
            const denomination = denominations[j];
            if (dp[i - denomination] === undefined) continue;
            min = Math.min(min, dp[i - denomination] + 1);
        }

        dp[i] = min;
    }

    return dp[value];
}
