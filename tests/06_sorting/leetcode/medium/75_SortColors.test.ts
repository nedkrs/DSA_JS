import SortColors from "../../../../src/06_sorting/leetcode/medium/75_SortColors";

test("sorts an array of 0s, 1s, and 2s", () => {
    const nums = [2, 0, 2, 1, 1, 0];
    SortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
});

test("sorts an array with one color only", () => {
    const nums = [2, 2, 2, 2];
    SortColors(nums);
    expect(nums).toEqual([2, 2, 2, 2]);
});

test("sorts an already sorted array", () => {
    const nums = [0, 0, 1, 1, 2, 2];
    SortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
});

test("sorts an empty array", () => {
    const nums: number[] = [];
    SortColors(nums);
    expect(nums).toEqual([]);
});

test("sorts an array with 0s and 1s only", () => {
    const nums = [1, 0, 1, 0, 1, 0];
    SortColors(nums);
    expect(nums).toEqual([0, 0, 0, 1, 1, 1]);
});

test("sorts an array with 1s and 2s only", () => {
    const nums = [2, 1, 2, 1, 2, 1];
    SortColors(nums);
    expect(nums).toEqual([1, 1, 1, 2, 2, 2]);
});

test("sorts an array with 0s and 2s only", () => {
    const nums = [0, 2, 0, 2, 0, 2];
    SortColors(nums);
    expect(nums).toEqual([0, 0, 0, 2, 2, 2]);
});
