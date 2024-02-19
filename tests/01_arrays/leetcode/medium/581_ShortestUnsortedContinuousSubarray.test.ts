import ShortestUnsortedContinuousSubarray from "../../../../src/01_arrays/leetcode/medium/581_ShortestUnsortedContinuousSubarray";

test("fully sorted array returns 0", () => {
    expect(ShortestUnsortedContinuousSubarray([1, 2, 3, 4])).toBe(0);
});

test("fully unsorted array returns length of the array", () => {
    expect(ShortestUnsortedContinuousSubarray([4, 3, 2, 1])).toBe(4);
});

test("partially unsorted array returns correct length", () => {
    expect(ShortestUnsortedContinuousSubarray([1, 3, 2, 4])).toBe(2);
});

test("array with unsorted elements at both ends", () => {
    expect(ShortestUnsortedContinuousSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
});

test("array with identical elements", () => {
    expect(ShortestUnsortedContinuousSubarray([2, 2, 2, 2])).toBe(0);
});

test("array with one element", () => {
    expect(ShortestUnsortedContinuousSubarray([1])).toBe(0);
});

test("empty array returns 0", () => {
    expect(ShortestUnsortedContinuousSubarray([])).toBe(0);
});

test("array that needs no sorting except for one element at the end", () => {
    expect(ShortestUnsortedContinuousSubarray([1, 2, 3, 3, 3])).toBe(0);
});

test("complex array with multiple unsorted segments", () => {
    expect(ShortestUnsortedContinuousSubarray([1, 2, 5, 3, 4, 8, 6, 7])).toBe(
        6,
    );
});
