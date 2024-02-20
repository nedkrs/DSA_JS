import CountSetBitsFast from "../../src/12_bit_manipulation/CountSetBitsFast";

describe("CountSetBitsFast", () => {
    it("counts bits correctly for 0", () => {
        expect(CountSetBitsFast(0)).toBe(0);
    });

    it("counts bits correctly for a positive integer", () => {
        expect(CountSetBitsFast(15)).toBe(4);
        expect(CountSetBitsFast(1)).toBe(1);
        expect(CountSetBitsFast(1023)).toBe(10);
    });
});
