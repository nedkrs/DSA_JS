import FirstMissingPositive from "../../../../src/01_arrays/leetcode/hard/41_FirstMissingPositive";

test("array with consecutive positives starting from 1", () => {
    expect(FirstMissingPositive([1, 2, 3])).toBe(4);
});

test("array with missing positives and negatives", () => {
    expect(FirstMissingPositive([3, 4, -1, 1])).toBe(2);
});

test("array with duplicates", () => {
    expect(FirstMissingPositive([1, 1, 2, 2])).toBe(3);
});

test("array with single positive number", () => {
    expect(FirstMissingPositive([1])).toBe(2);
});

test("array with single negative number", () => {
    expect(FirstMissingPositive([-1])).toBe(1);
});

test("array with all negatives", () => {
    expect(FirstMissingPositive([-5, -3, -2, -1])).toBe(1);
});

test("array with gap in positives", () => {
    expect(FirstMissingPositive([1, 2, 4, 5])).toBe(3);
});

test("empty array", () => {
    expect(FirstMissingPositive([])).toBe(1);
});

test("array with large range of numbers", () => {
    expect(FirstMissingPositive([10, 11, 12, 13, 14, 15])).toBe(1);
});

test("array with large range and negatives", () => {
    expect(FirstMissingPositive([-2, -1, 0, 1, 3, 5])).toBe(2);
});
