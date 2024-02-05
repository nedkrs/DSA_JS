// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.
// Return the answer in any order.
// A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.
// "2": ["a", "b", "c"],
// "3": ["d", "e", "f"],
// "4": ["g", "h", "i"],
// "5": ["j", "k", "l"],
// "6": ["m", "n", "o"],
// "7": ["p", "q", "r", "s"],
// "8": ["t", "u", "v"],
// "9": ["w", "x", "y", "z"],

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// Medium: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

export default function getLetterCombinationsOfAPhoneNumber(digits: string) {
    if (digits.length === 0) return [];
    let numToLetters: {
        [key: string]: string[];
    } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    };
    if (digits.length === 1) return numToLetters[digits[0]];

    let results: string[] = [];
    let letters = [...digits.split("").map((digit) => numToLetters[digit])];
    generate(0, letters, results, [], digits.length);
    return results;
}

function generate(
    i: number,
    letters: string[][],
    results: string[],
    currComb: string[],
    size: number,
) {
    if (currComb.length >= size) {
        results.push(currComb.slice().join(""));
        return;
    }
    if (i >= letters.length) return;

    for (let k = 0; k < letters[i].length; k++) {
        currComb.push(letters[i][k]);
        generate(i + 1, letters, results, currComb, size);
        currComb.pop();
    }
}
