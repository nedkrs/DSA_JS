import NumberOfIslands from "../../../../src/10_graphs/leetcode/medium/200_NumberOfIslands";

describe("NumberOfIslands", () => {
    test("returns 1 for a grid with one island", () => {
        const grid = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
        ];
        expect(NumberOfIslands(grid)).toBe(1);
    });

    test("returns 3 for a grid with three separate islands", () => {
        const grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ];
        expect(NumberOfIslands(grid)).toBe(3);
    });

    test("returns 0 for a grid with no land", () => {
        const grid = [
            ["0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
        ];
        expect(NumberOfIslands(grid)).toBe(0);
    });

    test("handles a single-element grid correctly", () => {
        const grid = [["1"]];
        expect(NumberOfIslands(grid)).toBe(1);

        const waterGrid = [["0"]];
        expect(NumberOfIslands(waterGrid)).toBe(0);
    });

    test("processes a complex grid with multiple islands correctly", () => {
        const grid = [
            ["1", "1", "0", "0", "0", "1"],
            ["1", "1", "0", "0", "0", "0"],
            ["0", "0", "1", "0", "1", "0"],
            ["0", "0", "0", "1", "1", "1"],
        ];
        expect(NumberOfIslands(grid)).toBe(4);
    });

    test("works with a grid of maximum allowed size", () => {
        const largeGrid = new Array(300)
            .fill("0")
            .map(() => new Array(300).fill("0"));
        largeGrid[0][0] = "1";
        expect(NumberOfIslands(largeGrid)).toBe(1);
    });
});
