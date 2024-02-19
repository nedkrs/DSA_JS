// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Easy: https://leetcode.com/problems/valid-parentheses/description/

type BracketMap = {
    [key: string]: string;
};

export default function ValidParentheses(s: string): boolean {
    let stack: string[] = [];
    let map: BracketMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            let complement = stack.pop();
            if (map[complement as keyof BracketMap] !== s[i]) return false;
        }
    }

    if (stack.length > 0) return false;

    return true;
}
