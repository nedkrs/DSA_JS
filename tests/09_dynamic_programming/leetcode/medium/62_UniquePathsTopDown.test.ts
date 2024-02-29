import UniquePathsTopDown from "../../../../src/09_dynamic_programming/leetcode/medium/62_UniquePathsTopDown";

test("basic grid 2x2", () => {
    expect(UniquePathsTopDown(2, 2)).toBe(2);
});

test("1x1 grid", () => {
    expect(UniquePathsTopDown(1, 1)).toBe(1);
});

test("1xn grid", () => {
    expect(UniquePathsTopDown(1, 5)).toBe(1);
});

test("mx1 grid", () => {
    expect(UniquePathsTopDown(5, 1)).toBe(1);
});

test("larger grid 3x3", () => {
    expect(UniquePathsTopDown(3, 3)).toBe(6);
});

test("larger grid 3x7", () => {
    expect(UniquePathsTopDown(3, 7)).toBe(28);
});

test("maximum reasonable grid size", () => {
    expect(UniquePathsTopDown(10, 10)).toBe(48620);
});
