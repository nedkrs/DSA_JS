import TurnOffTheRightmost1Bit from "../../src/12_bit_manipulation/TurnOffTheRightmost1Bit";

describe("TurnOffTheRightmost1Bit function", () => {
    test("turns off the rightmost 1 bit of a positive number", () => {
        expect(TurnOffTheRightmost1Bit(12)).toBe(8);
    });

    test("turns off the rightmost 1 bit of a number that is a power of 2", () => {
        expect(TurnOffTheRightmost1Bit(16)).toBe(0);
    });

    test("returns 0 when input is 0", () => {
        expect(TurnOffTheRightmost1Bit(0)).toBe(0);
    });

    test("turns off the rightmost 1 bit of a number with multiple 1 bits", () => {
        expect(TurnOffTheRightmost1Bit(14)).toBe(12);
    });

    test("turns off the rightmost 1 bit of a number with a single 1 bit", () => {
        expect(TurnOffTheRightmost1Bit(1)).toBe(0);
    });
});
