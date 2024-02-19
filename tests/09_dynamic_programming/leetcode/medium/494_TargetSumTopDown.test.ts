import TargetSumTopDown from "../../../../src/09_dynamic_programming/leetcode/medium/494_TargetSumTopDown"; // Adjust the import path as necessary

test("basic case with a small array", () => {
    expect(TargetSumTopDown([1, 1, 1, 1, 1], 3)).toBe(5);
});

test("case with no possible combinations", () => {
    expect(TargetSumTopDown([1, 2, 3], 7)).toBe(0);
});

test("case with multiple combinations", () => {
    expect(TargetSumTopDown([1, 2, 3, 4], 6)).toBe(1);
});

test("case with all zeros and a zero target", () => {
    expect(TargetSumTopDown([0, 0, 0, 0, 0], 0)).toBe(32);
});

test("case with negative and positive numbers leading to the target sum", () => {
    expect(TargetSumTopDown([1, 2, 1], 2)).toBe(2);
});
