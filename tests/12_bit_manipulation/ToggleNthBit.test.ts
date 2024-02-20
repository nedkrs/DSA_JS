import ToggleNthBit from "../../src/12_bit_manipulation/ToggleNthBit";

describe("ToggleNthBit", () => {
    test("toggles the 0th bit of 1 (should return 0)", () => {
        expect(ToggleNthBit(1, 0)).toBe(0);
    });

    test("toggles the 1st bit of 2 (should return 0)", () => {
        expect(ToggleNthBit(2, 1)).toBe(0);
    });

    test("toggles the 0th bit of 0 (should return 1)", () => {
        expect(ToggleNthBit(0, 0)).toBe(1);
    });

    test("toggles the 2nd bit of 4 (should return 0)", () => {
        expect(ToggleNthBit(4, 2)).toBe(0);
    });

    test("toggles the 1st bit of 0 (should return 2)", () => {
        expect(ToggleNthBit(0, 1)).toBe(2);
    });

    test("toggles the 3rd bit of 8 (should return 0)", () => {
        expect(ToggleNthBit(8, 3)).toBe(0);
    });

    test("toggles the 4th bit of 0 (should return 16)", () => {
        expect(ToggleNthBit(0, 4)).toBe(16);
    });
});
