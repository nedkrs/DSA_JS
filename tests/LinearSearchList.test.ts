import linear_fn from "../src/LinearSearchList";

test("linear search array", function () {
    const foo = [11, 33, 41, 13, 55, 49, 1550, 1, 118, 99, 51515];
    expect(linear_fn(foo, 33)).toEqual(true);
    expect(linear_fn(foo, 4)).toEqual(false);
    expect(linear_fn(foo, 99)).toEqual(true);
    expect(linear_fn(foo, 76)).toEqual(false);
    expect(linear_fn(foo, 1)).toEqual(true);
    expect(linear_fn(foo, 0)).toEqual(false);
});
