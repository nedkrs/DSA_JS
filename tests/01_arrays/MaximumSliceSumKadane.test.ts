import max_slice_sum from "../../src/01_arrays/MaximumSliceSumKadane";

test("linear search array", function () {
    expect(max_slice_sum([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
    expect(max_slice_sum([5, -7, 3, 5, -2, 4, -1])).toEqual(10);
});
