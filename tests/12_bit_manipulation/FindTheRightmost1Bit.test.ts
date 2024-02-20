import FindTheRightmost1Bit from "../../src/12_bit_manipulation/FindTheRightmost1Bit";

describe("FindTheRightmost1Bit function", () => {
    test("finds the rightmost 1 bit in a positive number", () => {
        expect(FindTheRightmost1Bit(10)).toEqual(2);
    });

    test("finds the rightmost 1 bit in a large positive number", () => {
        expect(FindTheRightmost1Bit(72)).toEqual(8);
    });

    test("finds the rightmost 1 bit in a negative number", () => {
        expect(FindTheRightmost1Bit(-10)).toEqual(2);
    });

    test("returns 0 for input 0", () => {
        expect(FindTheRightmost1Bit(0)).toEqual(0);
    });

    test("finds the rightmost 1 bit in a power of 2", () => {
        expect(FindTheRightmost1Bit(16)).toEqual(16);
    });

    test("finds the rightmost 1 bit in a negative power of 2", () => {
        expect(FindTheRightmost1Bit(-32)).toEqual(32);
    });
});
