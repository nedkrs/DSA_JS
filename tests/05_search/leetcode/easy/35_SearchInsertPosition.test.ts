import SearchInsertPosition from "../../../../src/05_search/leetcode/easy/35_SearchInsertPosition";

describe("SearchInsertPosition", () => {
    test("finds the position of a target value present in the array", () => {
        expect(SearchInsertPosition([1, 3, 5, 6], 5)).toBe(2);
    });

    test("returns the insert position for a target value not in the array", () => {
        expect(SearchInsertPosition([1, 3, 5, 6], 2)).toBe(1);
    });

    test("handles target value greater than all elements in the array", () => {
        expect(SearchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
    });

    test("handles target value less than all elements in the array", () => {
        expect(SearchInsertPosition([1, 3, 5, 6], 0)).toBe(0);
    });

    test("works with an empty array", () => {
        expect(SearchInsertPosition([], 5)).toBe(0);
    });

    test("handles target value at the end of the array", () => {
        expect(SearchInsertPosition([1, 3, 5], 6)).toBe(3);
    });

    test("handles a large array efficiently", () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
        expect(SearchInsertPosition(largeArray, 9999)).toBe(9998);
    });
});
