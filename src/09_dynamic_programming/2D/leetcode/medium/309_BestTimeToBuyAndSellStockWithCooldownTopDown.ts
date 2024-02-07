// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve.
// You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times)
// with the following restrictions:
// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously
// (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// Example 2:
// Input: prices = [1]
// Output: 0

// Constraints:

// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

// Medium: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/submissions/1167090763/

export default function BestTimeToBuyAndSellStockWithCooldownTopDown(
    prices: number[],
) {
    if (prices.length <= 1) return 0;
    let dp = {};
    return calcProfit(prices, 0, true, dp);
}

function calcProfit(
    prices: number[],
    i: number,
    buying: boolean,
    dp: { [key: string]: number },
) {
    if (i >= prices.length) {
        return 0;
    }
    if (dp[`${i}, ${buying}`] !== undefined) return dp[`${i}, ${buying}`];

    let cd = calcProfit(prices, i + 1, buying, dp);

    if (buying) {
        let buy = calcProfit(prices, i + 1, !buying, dp) - prices[i];
        dp[`${i}, ${buying}`] = Math.max(buy, cd);
    } else {
        let sell = calcProfit(prices, i + 2, !buying, dp) + prices[i];
        dp[`${i}, ${buying}`] = Math.max(sell, cd);
    }

    return dp[`${i}, ${buying}`];
}
