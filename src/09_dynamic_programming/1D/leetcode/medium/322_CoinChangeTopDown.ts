// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// Medium: https://leetcode.com/problems/coin-change/description/

export default function CoinChangeBottomUp(
    coins: number[],
    amount: number,
): number {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    let res = change(coins, amount, dp);

    return res !== Infinity ? res : -1;
}

function change(coins: number[], amount: number, dp: number[]) {
    if (dp[amount] !== Infinity) return dp[amount];

    let min = Infinity;

    for (let i = 0; i < coins.length; i++) {
        if (amount - coins[i] < 0) continue;

        min = Math.min(min, change(coins, amount - coins[i], dp) + 1);
    }

    dp[amount] = min;

    return dp[amount];
}
