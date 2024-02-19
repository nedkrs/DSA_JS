import MajorityElement from "../../../../src/01_arrays/leetcode/easy/169_MajorityElement";

describe("MajorityElement", () => {
    test("Example 1: nums = [3,2,3]", () => {
        expect(MajorityElement([3, 2, 3])).toBe(3);
    });

    test("Example 2: nums = [2,2,1,1,1,2,2]", () => {
        expect(MajorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    test("All elements are the same", () => {
        expect(MajorityElement([1, 1, 1, 1])).toBe(1);
    });

    test("Majority element at the beginning", () => {
        expect(MajorityElement([5, 5, 5, 2, 2])).toBe(5);
    });

    test("Majority element at the end", () => {
        expect(MajorityElement([2, 2, 1, 1, 5, 5, 5, 5])).toBe(5);
    });

    test("Single element", () => {
        expect(MajorityElement([1])).toBe(1);
    });

    test("Negative numbers as majority element", () => {
        expect(MajorityElement([-1, -1, -1, 2, 3, -1, -1])).toBe(-1);
    });
});
