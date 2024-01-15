import binary_search_list from "../src/BinarySearchList";

test("binary search array", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_search_list(foo, 69)).toEqual(true);
    expect(binary_search_list(foo, 1336)).toEqual(false);
    expect(binary_search_list(foo, 69420)).toEqual(true);
    expect(binary_search_list(foo, 69421)).toEqual(false);
    expect(binary_search_list(foo, 1)).toEqual(true);
    expect(binary_search_list(foo, 0)).toEqual(false);
    expect(binary_search_list([1, 2, 3, 4, 5], 5)).toEqual(true);
});
