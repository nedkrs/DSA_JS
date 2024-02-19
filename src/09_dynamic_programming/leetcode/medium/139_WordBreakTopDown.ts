// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Example 4:
// Input: s = ""aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"",
// wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
// Output: false

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

// Medium: https://leetcode.com/problems/word-break/description/

export default function WordBreakTopDown(s: string, wordDict: string[]) {
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = true;
    return wordBreak(s, wordDict, dp, s.length);
}

function wordBreak(
    s: string,
    wordDict: string[],
    dp: boolean[],
    i: number,
): boolean {
    if (dp[i] === true || dp[i] === false) return dp[i];

    for (let j = 0; j < wordDict.length; j++) {
        let word = wordDict[j];
        let subStr = s.substring(i - word.length, i);
        if (subStr !== word) continue;
        dp[i] = wordBreak(s, wordDict, dp, i - word.length);
        if (dp[i]) return dp[i];
    }

    dp[i] = false;
    return dp[i];
}
