import ComputeLogBase2 from "../../src/12_bit_manipulation/ComputeLogBase2";

describe("ComputeLogBase2 function", () => {
    test("computes log base 2 of 1", () => {
        expect(ComputeLogBase2(1)).toBe(0);
    });

    test("computes log base 2 of 2", () => {
        expect(ComputeLogBase2(2)).toBe(1);
    });

    test("computes log base 2 of 4", () => {
        expect(ComputeLogBase2(4)).toBe(2);
    });

    test("computes log base 2 of 8", () => {
        expect(ComputeLogBase2(8)).toBe(3);
    });

    test("computes log base 2 of 16", () => {
        expect(ComputeLogBase2(16)).toBe(4);
    });

    test("computes log base 2 of 32", () => {
        expect(ComputeLogBase2(32)).toBe(5);
    });

    test("computes log base 2 of 64", () => {
        expect(ComputeLogBase2(64)).toBe(6);
    });

    test("computes log base 2 of 128", () => {
        expect(ComputeLogBase2(128)).toBe(7);
    });

    test("computes log base 2 of 256", () => {
        expect(ComputeLogBase2(256)).toBe(8);
    });

    test("computes log base 2 of 512", () => {
        expect(ComputeLogBase2(512)).toBe(9);
    });

    test("computes log base 2 of 1024", () => {
        expect(ComputeLogBase2(1024)).toBe(10);
    });
});
