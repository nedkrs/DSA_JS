import CountingBits from "../../../../src/12_bit_manipulation/leetcode/easy/338_CountingBits";

describe("CountingBits", () => {
    test("n = 0", () => {
        expect(CountingBits(0)).toEqual([0]);
    });

    test("n = 1", () => {
        expect(CountingBits(1)).toEqual([0, 1]);
    });

    test("n = 2", () => {
        expect(CountingBits(2)).toEqual([0, 1, 1]);
    });

    test("n = 5", () => {
        expect(CountingBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
    });

    test("n = 15", () => {
        expect(CountingBits(15)).toEqual([
            0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4,
        ]);
    });
});
