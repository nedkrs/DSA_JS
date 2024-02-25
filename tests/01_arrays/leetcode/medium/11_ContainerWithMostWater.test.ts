import ContainerWithMostWater from "../../../../src/01_arrays/leetcode/medium/11_ContainerWithMostWater";

describe("ContainerWithMostWater", () => {
    test("calculates maximum water container correctly for provided heights", () => {
        expect(ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
        expect(ContainerWithMostWater([1, 1])).toBe(1);
        expect(ContainerWithMostWater([4, 3, 2, 1, 4])).toBe(16);
        expect(ContainerWithMostWater([0, 2])).toBe(0);
        expect(ContainerWithMostWater([2, 3, 4, 5, 18, 17, 6])).toBe(17);
    });

    test("returns 0 for empty or single-element arrays", () => {
        expect(ContainerWithMostWater([])).toBe(0);
        expect(ContainerWithMostWater([2])).toBe(0);
    });

    test("handles arrays with all elements of equal height", () => {
        expect(ContainerWithMostWater([5, 5, 5, 5])).toBe(15);
    });
});
