import SubarraySumEqualsK from "../../../../src/01_arrays/leetcode/medium/560_SubarraySumEqualsK";

describe("SubarraySumEqualsK", () => {
    test("counts subarrays summing to k with positive numbers", () => {
        expect(SubarraySumEqualsK([1, 1, 1], 2)).toBe(2);
    });

    test("counts subarrays summing to k with negative numbers", () => {
        expect(SubarraySumEqualsK([-1, -1, 1], 0)).toBe(1);
    });

    test("counts subarrays summing to k with a mix of positive and negative numbers", () => {
        expect(SubarraySumEqualsK([1, -1, 1, -1, 1], 0)).toBe(6);
    });

    test("counts subarrays summing to k with zeros", () => {
        expect(SubarraySumEqualsK([0, 0, 0, 0, 0], 0)).toBe(15);
    });

    test("handles empty array", () => {
        expect(SubarraySumEqualsK([], 0)).toBe(0);
    });

    test("counts subarrays summing to k with larger numbers", () => {
        expect(SubarraySumEqualsK([10, 2, -2, -20, 10], -10)).toBe(3);
    });

    test("counts subarrays when k is a large number", () => {
        expect(SubarraySumEqualsK([1, 2, 3, 4, 5], 15)).toBe(1);
    });

    test("counts subarrays summing to k with repeated numbers", () => {
        expect(SubarraySumEqualsK([5, 5, 5, 5, 5], 10)).toBe(4);
    });
});
