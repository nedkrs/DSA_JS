import IslandPerimeter from "../../../../src/10_graphs/leetcode/easy/463_IslandPerimiter";

describe("IslandPerimeter", () => {
    test("calculates the perimeter of an island", () => {
        const grid = [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
        ];
        expect(IslandPerimeter(grid)).toBe(16);
    });

    test("returns 4 for a single square island", () => {
        const grid = [[1]];
        expect(IslandPerimeter(grid)).toBe(4);
    });

    test("returns 4 for an island of size one with adjacent water", () => {
        const grid = [[1, 0]];
        expect(IslandPerimeter(grid)).toBe(4);
    });

    test("correctly calculates perimeter for a complex shaped island", () => {
        const grid = [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
        ];
        expect(IslandPerimeter(grid)).toBe(14);
    });
});
