import frog_jump from "../src/09_dynamic_programming/1D/FrogJumpDP";

test("frog_jump", function () {
    expect(frog_jump([1, 3, 4], 6, 100000)).toEqual(9);
    expect(frog_jump([1, 2], 5, 100000)).toEqual(8);
    expect(frog_jump([2, 5, 10], 10, 100000)).toEqual(3);
    expect(frog_jump([1], 7, 100000)).toEqual(1);
    expect(frog_jump([3, 5], 2, 100000)).toEqual(0);
    expect(frog_jump([1, 4], 6, 1000000)).toEqual(4);
    expect(frog_jump([1, 2, 3], 0, 100000)).toEqual(1);
});
