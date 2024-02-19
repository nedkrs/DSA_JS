// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

// Medium: https://leetcode.com/problems/generate-parentheses/description/

export default function GenerateParenthesis(n: number) {
    let res: string[] = [];

    function backtrack(left: number, right: number, path: string) {
        if (path.length === 2 * n) {
            res.push(path);
            return;
        }

        if (left < n) backtrack(left + 1, right, path + "(");
        if (right < left) backtrack(left, right + 1, path + ")");
    }

    backtrack(0, 0, "");
    return res;
}
