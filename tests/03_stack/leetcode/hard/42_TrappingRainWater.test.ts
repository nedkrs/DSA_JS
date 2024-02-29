import TrappingRainWater from "../../../../src/03_stack/leetcode/hard/42_TrappingRainWater";

describe("TrappingRainWater", () => {
    it("handles an empty array", () => {
        expect(TrappingRainWater([])).toEqual(0);
    });

    it("handles an array with no pits", () => {
        expect(TrappingRainWater([1, 2, 3, 4, 5])).toEqual(0);
        expect(TrappingRainWater([5, 4, 3, 2, 1])).toEqual(0);
    });

    it("calculates trapped water for a single pit", () => {
        expect(TrappingRainWater([3, 0, 2])).toEqual(2);
    });

    it("calculates trapped water for multiple pits", () => {
        expect(TrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(
            6,
        );
    });

    it("calculates trapped water with peaks at the ends", () => {
        expect(TrappingRainWater([2, 1, 0, 1, 2])).toEqual(4);
    });
});
