import ReverseBits from "../../src/12_bit_manipulation/ReverseBits";

describe("ReverseBits function", () => {
    test("reverses bits of 0", () => {
        expect(ReverseBits(0)).toBe(0);
    });

    test("reverses bits of a number with a single 1 bit", () => {
        expect(ReverseBits(1)).toBe(Math.pow(2, 31));
    });

    test("reverses bits of a full 32-bit number", () => {
        expect(ReverseBits(0xffffffff)).toBe(0xffffffff);
    });

    test("reverses bits of a number with alternating 1 and 0", () => {
        expect(ReverseBits(0xaaaaaaaa)).toBe(0x55555555);
    });

    test("reverses bits correctly for arbitrary numbers", () => {
        const reversed = ReverseBits(0x12345678);
        const expected = 0x1e6a2c48;
        expect(reversed).toBe(expected);
    });
});
