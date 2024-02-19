// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Medium: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

export default function LongestSubstringWithoutRepeatingCharacters(
    s: string,
): number {
    let maxLen = 0;
    let currentLen = 0;
    let charMap: { [key: string]: number } = {};
    let start = 0;
    let end = 0;

    while (end < s.length) {
        const endChar = s[end];
        charMap[endChar] = (charMap[endChar] || 0) + 1;
        currentLen++;

        if (charMap[endChar] > 1) {
            while (charMap[endChar] > 1) {
                const startChar = s[start];
                currentLen--;
                charMap[startChar]--;
                start++;
            }
        }

        maxLen = Math.max(maxLen, currentLen);
        end++;
    }

    return maxLen;
}
