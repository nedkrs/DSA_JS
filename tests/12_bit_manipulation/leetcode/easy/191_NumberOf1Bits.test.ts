import NumberOf1Bits from "../../../../src/12_bit_manipulation/leetcode/easy/191_NumberOf1Bits";

describe("NumberOf1Bits", () => {
    test("zero", () => {
        expect(NumberOf1Bits(0)).toBe(0);
    });

    test("one", () => {
        expect(NumberOf1Bits(1)).toBe(1);
    });

    test("number with multiple 1 bits", () => {
        expect(NumberOf1Bits(13)).toBe(3);
    });

    test("maximum 32-bit unsigned integer", () => {
        expect(NumberOf1Bits(4294967295)).toBe(32);
    });

    test("power of two", () => {
        expect(NumberOf1Bits(1024)).toBe(1);
    });

    test("random number", () => {
        expect(NumberOf1Bits(123456)).toBe(6);
    });
});
