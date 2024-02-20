import CheckNthBit from "../../src/12_bit_manipulation/CheckNthBit";

describe("CheckNthBit", () => {
    test("returns true if the 0th bit of 1 is set", () => {
        expect(CheckNthBit(1, 0)).toBe(true);
    });

    test("returns true if the 1st bit of 2 is set", () => {
        expect(CheckNthBit(2, 1)).toBe(true);
    });

    test("returns true if the 2nd bit of 4 is set", () => {
        expect(CheckNthBit(4, 2)).toBe(true);
    });

    test("returns true if the 3rd bit of 8 is set", () => {
        expect(CheckNthBit(8, 3)).toBe(true);
    });

    test("returns false if the 1st bit of 1 is not set", () => {
        expect(CheckNthBit(1, 1)).toBe(false);
    });

    test("returns false if the 0th bit of 2 is not set", () => {
        expect(CheckNthBit(2, 0)).toBe(false);
    });

    test("returns true if the 4th bit of 16 is set", () => {
        expect(CheckNthBit(16, 4)).toBe(true);
    });

    test("returns false if the 5th bit of 32 is not queried (checking an unset bit)", () => {
        expect(CheckNthBit(32, 4)).toBe(false);
    });

    test("returns false for negative numbers where the bit is not set", () => {
        expect(CheckNthBit(-2, 0)).toBe(false);
    });

    test("returns true for negative numbers where the bit is set", () => {
        expect(CheckNthBit(-3, 0)).toBe(true);
    });
});
