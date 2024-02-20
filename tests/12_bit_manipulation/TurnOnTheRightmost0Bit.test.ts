import TurnOnTheRightmost0Bit from "../../src/12_bit_manipulation/TurnOnTheRightmost0Bit";

describe("TurnOnTheRightmost0Bit function", () => {
    test("turns on the rightmost 0 bit of a number with a single 0 bit", () => {
        expect(TurnOnTheRightmost0Bit(14)).toBe(15);
    });

    test("turns on the rightmost 0 bit in a number with multiple 0 bits", () => {
        expect(TurnOnTheRightmost0Bit(18)).toBe(19);
    });

    test("turns on the rightmost 0 bit of a number with rightmost 0 at LSB", () => {
        expect(TurnOnTheRightmost0Bit(1)).toBe(3);
    });

    test("turns on the rightmost 0 bit of a number with rightmost 0 not at LSB", () => {
        expect(TurnOnTheRightmost0Bit(4)).toBe(5);
    });

    test("handles the special case of 0 correctly", () => {
        expect(TurnOnTheRightmost0Bit(0)).toBe(1);
    });
});
