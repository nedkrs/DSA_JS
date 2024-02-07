import SingleNumber from "../../../../src/12_bit_manipulation/leetcode/easy/136_SingleNumber";

describe("SingleNumber", () => {
    test("empty array", () => {
        expect(SingleNumber([])).toBe(0);
    });

    test("single element", () => {
        expect(SingleNumber([1])).toBe(1);
    });

    test("multiple elements with even occurrences", () => {
        expect(SingleNumber([1, 1, 2, 2])).toBe(0);
    });

    test("multiple elements with odd occurrences", () => {
        expect(SingleNumber([1, 2, 2, 3, 3])).toBe(1);
    });

    test("all elements are the same", () => {
        expect(SingleNumber([4, 4, 4, 4])).toBe(0);
    });
});
