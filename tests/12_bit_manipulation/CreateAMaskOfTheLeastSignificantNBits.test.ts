import CreateAMaskOfTheLeastSignificantNBits from "../../src/12_bit_manipulation/CreateAMaskOfTheLeastSignificantNBits";

describe("CreateAMaskOfTheLeastSignificantNBits function", () => {
    test("creates a mask for 0 bits", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(0)).toBe(0);
    });

    test("creates a mask for 1 bit", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(1)).toBe(1);
    });

    test("creates a mask for 2 bits", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(2)).toBe(3);
    });

    test("creates a mask for 3 bits", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(3)).toBe(7);
    });

    test("creates a mask for 4 bits", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(4)).toBe(15);
    });

    test("creates a mask for 5 bits", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(5)).toBe(31);
    });

    test("creates a mask for 8 bits", () => {
        expect(CreateAMaskOfTheLeastSignificantNBits(8)).toBe(255);
    });
});
