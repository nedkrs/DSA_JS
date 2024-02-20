import RoundUpToTheNextPowerOfTwo from "../../src/12_bit_manipulation/RoundUpToTheNextPowerOfTwo";

describe("RoundUpToTheNextPowerOfTwo function", () => {
    test("rounds up 0 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(0)).toBe(1);
    });

    test("rounds up 1 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(1)).toBe(1);
    });

    test("rounds up 2 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(2)).toBe(2);
    });

    test("rounds up 3 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(3)).toBe(4);
    });

    test("rounds up 5 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(5)).toBe(8);
    });

    test("rounds up 6 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(6)).toBe(8);
    });

    test("rounds up 15 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(15)).toBe(16);
    });

    test("rounds up 16 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(16)).toBe(16);
    });

    test("rounds up 17 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(17)).toBe(32);
    });

    test("rounds up 31 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(31)).toBe(32);
    });

    test("rounds up 32 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(32)).toBe(32);
    });

    test("rounds up 33 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(33)).toBe(64);
    });

    test("rounds up 1023 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(1023)).toBe(1024);
    });

    test("rounds up 1024 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(1024)).toBe(1024);
    });

    test("rounds up 1025 to the next power of two", () => {
        expect(RoundUpToTheNextPowerOfTwo(1025)).toBe(2048);
    });
});
