// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
// is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces,
// square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain
// any digits and that digits are only for those repeat numbers, k.
// For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

// Medium: https://leetcode.com/problems/decode-string/

export default function DecodeString(s: string) {
    let stack = [];
    let currentNum = 0;
    let currentString = "";

    for (let char of s) {
        if (char === "[") {
            stack.push(currentNum);
            stack.push(currentString);
            currentNum = 0;
            currentString = "";
        } else if (char === "]") {
            let prevString = stack.pop();
            let num = stack.pop() as number;
            currentString = prevString + currentString.repeat(num);
        } else if (!isNaN(parseInt(char))) {
            currentNum = currentNum * 10 + parseInt(char);
        } else {
            currentString += char;
        }
    }

    return currentString;
}
