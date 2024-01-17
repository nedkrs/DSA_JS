import counting_sort from "../src/CountingSort";

test("counting_sort", function () {
    let arr = [
        { key: 2, value: "Carol" },
        { key: 1, value: "David" },
        { key: 3, value: "Bob" },
        { key: 2, value: "Alice" },
        { key: 6, value: "Nestor" },
        { key: 4, value: "Jack" },
    ];

    expect(counting_sort(arr)).toEqual([
        { key: 1, value: "David" },
        { key: 2, value: "Carol" },
        { key: 2, value: "Alice" },
        { key: 3, value: "Bob" },
        { key: 4, value: "Jack" },
        { key: 6, value: "Nestor" },
    ]);
});
