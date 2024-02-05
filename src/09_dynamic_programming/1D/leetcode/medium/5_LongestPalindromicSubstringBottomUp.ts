// Given a string s, return the longest
// palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// Medium: https://leetcode.com/problems/longest-palindromic-substring/description/

export default function LongestPalindromicSubstring(s: string): string {
    if (s.length <= 1) return s;

    let longestPalindrome = "";

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > longestPalindrome.length) {
            longestPalindrome = oddPalindrome;
        }

        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > longestPalindrome.length) {
            longestPalindrome = evenPalindrome;
        }
    }

    return longestPalindrome;
}

function expandAroundCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.substring(left + 1, right);
}
