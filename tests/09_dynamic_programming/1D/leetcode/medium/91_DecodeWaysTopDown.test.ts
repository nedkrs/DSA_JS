import DecodeWaysTopDown from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/91_DecodeWaysTopDown";

describe("DecodeWaysBottomUp", () => {
    test("valid encoding", () => {
        expect(DecodeWaysTopDown("12")).toEqual(2);
    });

    test("single digit", () => {
        expect(DecodeWaysTopDown("8")).toEqual(1);
    });

    test("multiple digits", () => {
        expect(DecodeWaysTopDown("226")).toEqual(3);
    });

    test("starts with 0", () => {
        expect(DecodeWaysTopDown("012")).toEqual(0);
    });

    test("empty string", () => {
        expect(DecodeWaysTopDown("")).toEqual(1);
    });

    test("invalid two-digit encoding", () => {
        expect(DecodeWaysTopDown("27")).toEqual(1);
    });
});
