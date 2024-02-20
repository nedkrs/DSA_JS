import IsolateTheRightmost0Bit from "../../src/12_bit_manipulation/IsolateTheRightmost0Bit";

describe("IsolateTheRightmost0Bit function", () => {
    test("isolates the rightmost 0 bit of a number with a single 0 bit", () => {
        expect(IsolateTheRightmost0Bit(191)).toBe(64);
    });

    test("returns 1 for numbers with all bits set except the least significant bit", () => {
        expect(IsolateTheRightmost0Bit(254)).toBe(1);
    });

    test("returns the least significant bit for numbers with contiguous 1s from the least significant bit", () => {
        expect(IsolateTheRightmost0Bit(240)).toBe(1);
    });

    test("handles the special case of 0 correctly", () => {
        expect(IsolateTheRightmost0Bit(0)).toBe(1);
    });

    test("isolates the rightmost 0 bit in a number with alternating bit pattern", () => {
        expect(IsolateTheRightmost0Bit(85)).toBe(2);
    });
});
