import ReverseInteger from "../../../../src/13_maths/leetcode/medium/7_ReverseInteger";

describe("ReverseInteger", () => {
    test("reverses a positive number", () => {
        expect(ReverseInteger(123)).toBe(321);
    });

    test("reverses a negative number", () => {
        expect(ReverseInteger(-123)).toBe(-321);
    });

    test("handles zero correctly", () => {
        expect(ReverseInteger(0)).toBe(0);
    });

    test("drops trailing zeros", () => {
        expect(ReverseInteger(120)).toBe(21);
    });

    test("returns 0 for overflow", () => {
        const INT_MAX = 2 ** 31 - 1;
        expect(ReverseInteger(INT_MAX)).toBe(0); // Overflow case
    });

    test("returns 0 for underflow", () => {
        const INT_MIN = -(2 ** 31);
        expect(ReverseInteger(INT_MIN)).toBe(0); // Underflow case
    });

    test("returns 0 when reversed number exceeds 32-bit integer range", () => {
        expect(ReverseInteger(1534236469)).toBe(0); // This should overflow
    });

    test("reverses number with single digit", () => {
        expect(ReverseInteger(7)).toBe(7);
    });

    test("reverses number leading to no overflow", () => {
        expect(ReverseInteger(2147483641)).toBe(1463847412); // No overflow case
    });
});
