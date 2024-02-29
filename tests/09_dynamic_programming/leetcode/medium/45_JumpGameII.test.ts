import JumpGameII from "../../../../src/09_dynamic_programming/leetcode/medium/45_JumpGameII";

describe("Jump Game II", () => {
    test("jumps for array with single element", () => {
        expect(JumpGameII([0])).toBe(0);
    });

    test("jumps for array with two elements", () => {
        expect(JumpGameII([1, 2])).toBe(1);
    });

    test("jumps for array with elements leading to maximum jump at each step", () => {
        expect(JumpGameII([2, 3, 1, 1, 4])).toBe(2);
    });

    test("jumps for longer array with varied jumps", () => {
        expect(JumpGameII([2, 1, 1, 1, 4])).toBe(3);
    });

    test("jumps for array requiring minimum jumps with large numbers", () => {
        expect(JumpGameII([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0])).toBe(2);
    });

    test("jumps for array with maximum length jump at the start", () => {
        expect(JumpGameII([6, 1, 1, 1, 1, 1, 1, 1])).toBe(2);
    });

    test("jumps for array with elements all ones", () => {
        expect(JumpGameII([1, 1, 1, 1, 1])).toBe(4);
    });
});
