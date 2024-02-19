// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Medium: https://leetcode.com/problems/longest-common-prefix/description/

export default function LongestCommonPrefix(strs: string[]) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let p = "";
    let j = 0;

    while (true) {
        for (let i = 0; i < strs.length - 1; i++) {
            let word = strs[i];
            let letter = word[j];
            if (letter && letter === strs[i + 1][j]) {
                continue;
            }
            return p;
        }
        p += strs[0][j];
        j++;
    }
}
