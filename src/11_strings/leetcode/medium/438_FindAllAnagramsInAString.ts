// Given two strings s and p, return an array of all the start indices of p's anagrams in s.
// You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

// Medium: https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

export default function FindAllAnagramsInAString(s: string, p: string) {
    let hashP: { [key: string]: number } = {};
    for (let char of p) {
        hashP[char] = (hashP[char] || 0) + 1;
    }

    let res = [];
    let left = 0;
    let right = 0;
    let count = p.length;

    while (right < s.length) {
        if (hashP[s[right]] > 0) count--;
        hashP[s[right]]--;
        right++;

        if (count === 0) res.push(left);

        if (right - left == p.length) {
            if (hashP[s[left]] >= 0) count++;
            hashP[s[left]]++;
            left++;
        }
    }

    return res;
}

// export default function FindAllAnagramsInAString(s: string, p: string): number[] {
//     // Hash map to store character frequencies in p
//     let hashP: { [key: string]: number } = {};
//     for (let char of p) {
//         hashP[char] = (hashP[char] || 0) + 1;
//     }

//     // Result array to store starting indices of anagrams of p in s
//     let res: number[] = [];
//     let left = 0; // Left pointer for the sliding window
//     let right = 0; // Right pointer for the sliding window
//     let count = p.length; // Count of characters in p to be matched

//     while (right < s.length) {
//         // If the current character is in p, decrement the count
//         if (hashP[s[right]] > 0) count--;
//         // Decrement the frequency of the current character
//         hashP[s[right]]--;
//         right++;

//         // If count is 0, all characters from p are matched in the current window
//         if (count === 0) res.push(left);

//         // If the window size equals the length of p, move the left pointer to shrink the window
//         if (right - left == p.length) {
//             if (hashP[s[left]] >= 0) count++; // If this character is in p, increment the count
//             hashP[s[left]]++; // Restore the frequency of the character moving out of the window
//             left++;
//         }
//     }

//     return res;
// }
