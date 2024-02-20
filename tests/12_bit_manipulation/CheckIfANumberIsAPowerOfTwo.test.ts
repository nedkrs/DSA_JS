import CheckIfANumberIsAPowerOfTwo from "../../src/12_bit_manipulation/CheckIfANumberIsAPowerOfTwo";

describe("CheckIfANumberIsAPowerOfTwo", () => {
    it("returns true for numbers that are powers of two", () => {
        expect(CheckIfANumberIsAPowerOfTwo(1)).toBe(true);
        expect(CheckIfANumberIsAPowerOfTwo(2)).toBe(true);
        expect(CheckIfANumberIsAPowerOfTwo(4)).toBe(true);
        expect(CheckIfANumberIsAPowerOfTwo(8)).toBe(true);
        expect(CheckIfANumberIsAPowerOfTwo(16)).toBe(true);
    });

    it("returns false for numbers that are not powers of two", () => {
        expect(CheckIfANumberIsAPowerOfTwo(0)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(3)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(5)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(6)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(7)).toBe(false);
    });

    it("returns false for negative numbers", () => {
        expect(CheckIfANumberIsAPowerOfTwo(-1)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(-2)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(-4)).toBe(false);
        expect(CheckIfANumberIsAPowerOfTwo(-8)).toBe(false);
    });
});
