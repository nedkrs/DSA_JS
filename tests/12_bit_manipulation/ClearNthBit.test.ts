import ClearNthBit from "../../src/12_bit_manipulation/ClearNthBit";

describe("ClearNthBit", () => {
    test("clears the 0th bit of 1 (should return 0)", () => {
        expect(ClearNthBit(1, 0)).toBe(0);
    });

    test("clears the 1st bit of 3 (should return 1)", () => {
        expect(ClearNthBit(3, 1)).toBe(1);
    });

    test("clears the 2nd bit of 4 (should return 0)", () => {
        expect(ClearNthBit(4, 2)).toBe(0);
    });

    test("clears the 3rd bit of 8 (should return 0)", () => {
        expect(ClearNthBit(8, 3)).toBe(0);
    });

    test("clears the 4th bit of 16 (should return 0)", () => {
        expect(ClearNthBit(16, 4)).toBe(0);
    });

    test("clears the 5th bit of 32 (should return 0)", () => {
        expect(ClearNthBit(32, 5)).toBe(0);
    });

    test("clears the 1st bit of 2 (should return 0)", () => {
        expect(ClearNthBit(2, 1)).toBe(0);
    });

    test("attempting to clear a bit that is already 0 does not change the number", () => {
        expect(ClearNthBit(0, 1)).toBe(0);
    });
});
