// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

// Medium: https://leetcode.com/problems/edit-distance/description/

export default function EditDistance(word1: string, word2: string) {
    if (word1.length === 0) return word2.length;
    if (word2.length === 0) return word1.length;
    if (word1 === word2) return 0;

    let dp = new Array(word2.length + 1).fill(0);
    let prev = new Array(dp.length).fill(0).map((_, i) => i);

    for (let i = 1; i <= word1.length; i++) {
        dp[0] = i;

        for (let j = 1; j <= word2.length; j++) {
            let min = Math.min(prev[j], prev[j - 1], dp[j - 1]);
            if (word1[i - 1] === word2[j - 1]) dp[j] = prev[j - 1];
            else dp[j] = min + 1;
        }

        prev = [...dp];
    }

    return dp[dp.length - 1];
}
