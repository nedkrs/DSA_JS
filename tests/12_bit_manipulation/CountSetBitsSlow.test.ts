import CountSetBitsSlow from "../../src/12_bit_manipulation/CountSetBitsSlow";

describe("CountSetBitsSlow", () => {
    it("counts bits correctly for 0", () => {
        expect(CountSetBitsSlow(0)).toBe(0);
    });

    it("counts bits correctly for a positive integer", () => {
        expect(CountSetBitsSlow(15)).toBe(4);
        expect(CountSetBitsSlow(1)).toBe(1);
        expect(CountSetBitsSlow(1023)).toBe(10);
    });
});
