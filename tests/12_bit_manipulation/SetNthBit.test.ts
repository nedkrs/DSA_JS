import SetNthBit from "../../src/12_bit_manipulation/SetNthBit";

describe("SetNthBit", () => {
    test("sets the 0th bit of 0 (should return 1)", () => {
        expect(SetNthBit(0, 0)).toBe(1);
    });

    test("sets the 1st bit of 1 (should return 3)", () => {
        expect(SetNthBit(1, 1)).toBe(3);
    });

    test("sets the 2nd bit of 0 (should return 4)", () => {
        expect(SetNthBit(0, 2)).toBe(4);
    });

    test("sets the 3rd bit of 4 (should return 12)", () => {
        expect(SetNthBit(4, 3)).toBe(12);
    });

    test("sets the 4th bit of 0 (should return 16)", () => {
        expect(SetNthBit(0, 4)).toBe(16);
    });

    test("sets the 5th bit of 32 (should return 32)", () => {
        expect(SetNthBit(32, 5)).toBe(32);
    });

    test("sets the 1st bit of 2 (should return 2)", () => {
        expect(SetNthBit(2, 1)).toBe(2);
    });
});
