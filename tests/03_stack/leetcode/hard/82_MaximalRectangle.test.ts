import MaximalRectangle from "../../../../src/03_stack/leetcode/hard/82_MaximalRectangle";

describe("MaximalRectangle", () => {
    test("should return 0 for matrix with all 0s", () => {
        expect(
            MaximalRectangle([
                ["0", "0"],
                ["0", "0"],
            ]),
        ).toBe(0);
    });

    test("should return area for matrix with all 1s", () => {
        expect(
            MaximalRectangle([
                ["1", "1"],
                ["1", "1"],
            ]),
        ).toBe(4);
    });

    test("should return correct area for mixed matrix", () => {
        expect(
            MaximalRectangle([
                ["1", "0", "1", "0", "0"],
                ["1", "0", "1", "1", "1"],
                ["1", "1", "1", "1", "1"],
                ["1", "0", "0", "1", "0"],
            ]),
        ).toBe(6);
    });

    test("should handle single row matrix", () => {
        expect(MaximalRectangle([["1", "1", "1", "1"]])).toBe(4);
    });

    test("should handle single column matrix", () => {
        expect(MaximalRectangle([["1"], ["1"], ["1"], ["1"]])).toBe(4);
    });

    test("should handle matrix with single 1", () => {
        expect(
            MaximalRectangle([
                ["0", "0"],
                ["0", "1"],
            ]),
        ).toBe(1);
    });

    test("should handle large matrix", () => {
        expect(
            MaximalRectangle([
                ["1", "0", "1", "1", "1"],
                ["1", "1", "1", "1", "1"],
                ["0", "1", "1", "0", "1"],
                ["1", "1", "1", "1", "1"],
                ["1", "1", "1", "1", "1"],
                ["0", "0", "0", "0", "0"],
            ]),
        ).toBe(10);
    });
});
