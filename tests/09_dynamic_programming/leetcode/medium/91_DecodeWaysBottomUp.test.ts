import DecodeWaysBottomUp from "../../../../src/09_dynamic_programming/leetcode/medium/91_DecodeWaysBottomUp";

describe("DecodeWaysBottomUp", () => {
    test("valid encoding", () => {
        expect(DecodeWaysBottomUp("12")).toEqual(2);
    });

    test("single digit", () => {
        expect(DecodeWaysBottomUp("8")).toEqual(1);
    });

    test("multiple digits", () => {
        expect(DecodeWaysBottomUp("226")).toEqual(3);
    });

    test("starts with 0", () => {
        expect(DecodeWaysBottomUp("012")).toEqual(0);
    });

    test("empty string", () => {
        expect(DecodeWaysBottomUp("")).toEqual(1);
    });

    test("invalid two-digit encoding", () => {
        expect(DecodeWaysBottomUp("27")).toEqual(1);
    });
});
