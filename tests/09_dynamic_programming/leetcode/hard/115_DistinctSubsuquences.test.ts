import DistinctSubsuquences from "../../../../src/09_dynamic_programming/leetcode/hard/115_DistinctSubsuquences";

describe("DistinctSubsuquences function", () => {
    test("should return correct count of distinct subsequences - case 1", () => {
        const s = "rabbbit";
        const t = "rabbit";
        expect(DistinctSubsuquences(s, t)).toBe(3);
    });

    test("should return correct count of distinct subsequences - case 2", () => {
        const s = "babgbag";
        const t = "bag";
        expect(DistinctSubsuquences(s, t)).toBe(5);
    });

    test("should return 0 when the target is not a subsequence", () => {
        const s = "abc";
        const t = "acdb";
        expect(DistinctSubsuquences(s, t)).toBe(0);
    });

    test("should return 1 when target is empty", () => {
        const s = "abc";
        const t = "";
        expect(DistinctSubsuquences(s, t)).toBe(1);
    });

    test("should return 0 when source is empty and target is not", () => {
        const s = "";
        const t = "abc";
        expect(DistinctSubsuquences(s, t)).toBe(0);
    });

    test("should handle large strings efficiently", () => {
        const s = "a".repeat(1000);
        const t = "a".repeat(500);
        expect(DistinctSubsuquences(s, t)).toBeGreaterThan(0); // Specific value might be very large to compute here
    });
});
