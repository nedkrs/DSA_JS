// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

// Medium: https://leetcode.com/problems/reverse-integer/description/

export default function ReverseInteger(x: number) {
    if (x === 0) return 0;

    let INT_MAX = 2 ** 31 - 1;
    let INT_MIN = -(2 ** 31);

    let sign = x < 0 ? "neg" : "pos";
    let result = 0;
    x = Math.abs(x);

    while (x !== 0) {
        let last_digit = x % 10;
        x = Math.floor(x / 10);
        result = result * 10 + last_digit;
        if (result > INT_MAX || -1 * result < INT_MIN) return 0;
    }

    return sign === "neg" ? result * -1 : result;
}
