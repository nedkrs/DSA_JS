import JumpGame from "../../../../src/01_arrays/leetcode/medium/55_JumpGame";

describe("JumpGame", () => {
    test("can reach the end with consecutive steps", () => {
        const nums = [2, 3, 1, 1, 4];
        expect(JumpGame(nums)).toBe(true);
    });

    test("cannot reach the end due to a gap", () => {
        const nums = [3, 2, 1, 0, 4];
        expect(JumpGame(nums)).toBe(false);
    });

    test("single element array", () => {
        const nums = [0];
        expect(JumpGame(nums)).toBe(true);
    });

    test("can jump over multiple zeros", () => {
        const nums = [2, 0, 0, 0, 1];
        expect(JumpGame(nums)).toBe(true);
    });

    test("starting with zero in a multiple element array", () => {
        const nums = [0, 2, 3];
        expect(JumpGame(nums)).toBe(false);
    });

    test("large jump at the beginning", () => {
        const nums = [6, 1, 2, 3, 4, 5, 0, 0, 0, 0];
        expect(JumpGame(nums)).toBe(true);
    });

    test("ending with a large jump", () => {
        const nums = [1, 2, 3, 4, 5, 0, 0, 0, 10];
        expect(JumpGame(nums)).toBe(true);
    });
});
