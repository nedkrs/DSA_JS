// Given two strings s and t, return the number of distinct subsequences of s which equals t.
// The test cases are generated so that the answer fits on a 32-bit signed integer.

// Example 1:
// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// rabbbit
// rabbbit

// Example 2:
// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag

// Constraints:

// 1 <= s.length, t.length <= 1000
// s and t consist of English letters.

// Hard: https://leetcode.com/problems/distinct-subsequences/description/

export default function DistinctSubsuquences(s: string, t: string) {
    let dp = Array.from({ length: s.length + 1 }, () =>
        Array(t.length + 1).fill(undefined),
    );

    function distinct(i: number, j: number) {
        if (j === t.length) return 1;
        if (i === s.length) return 0;
        if (dp[i][j] !== undefined) return dp[i][j];

        if (s[i] === t[j]) {
            dp[i][j] = distinct(i + 1, j + 1) + distinct(i + 1, j);
        } else {
            dp[i][j] = distinct(i + 1, j);
        }
        return dp[i][j];
    }

    return distinct(0, 0);
}
