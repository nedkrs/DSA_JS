import RomanToInteger from "../../../../src/01_arrays/leetcode/easy/13_RomanToInteger";

describe("RomanToInteger", () => {
    test("converts I to 1", () => {
        expect(RomanToInteger("I")).toBe(1);
    });

    test("converts III to 3", () => {
        expect(RomanToInteger("III")).toBe(3);
    });

    test("converts IV to 4", () => {
        expect(RomanToInteger("IV")).toBe(4);
    });

    test("converts IX to 9", () => {
        expect(RomanToInteger("IX")).toBe(9);
    });

    test("converts LVIII to 58", () => {
        expect(RomanToInteger("LVIII")).toBe(58);
    });

    test("converts MCMXCIV to 1994", () => {
        expect(RomanToInteger("MCMXCIV")).toBe(1994);
    });

    test("handles empty string", () => {
        expect(RomanToInteger("")).toBe(0);
    });
});
