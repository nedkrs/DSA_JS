import FrogJumpBottomUp from "../../../src/09_dynamic_programming/1D/FrogJumpBottomUp";

test("FrogJumpBottomUp", function () {
    expect(FrogJumpBottomUp([1, 3, 4], 6, 100000)).toEqual(9);
    expect(FrogJumpBottomUp([1, 2], 5, 100000)).toEqual(8);
    expect(FrogJumpBottomUp([2, 5, 10], 10, 100000)).toEqual(3);
    expect(FrogJumpBottomUp([1], 7, 100000)).toEqual(1);
    expect(FrogJumpBottomUp([3, 5], 2, 100000)).toEqual(0);
    expect(FrogJumpBottomUp([1, 4], 6, 1000000)).toEqual(4);
    expect(FrogJumpBottomUp([1, 2, 3], 0, 100000)).toEqual(1);
});
