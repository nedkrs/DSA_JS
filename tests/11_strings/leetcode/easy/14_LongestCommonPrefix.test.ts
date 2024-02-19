import LongestCommonPrefix from "../../../../src/11_strings/leetcode/easy/14_LongestCommonPrefix";

describe("LongestCommonPrefix", () => {
    it("finds the longest common prefix", () => {
        expect(LongestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    it("returns an empty string when there is no common prefix", () => {
        expect(LongestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    it("returns the string itself when the array contains only one string", () => {
        expect(LongestCommonPrefix(["alone"])).toBe("alone");
    });

    it("returns an empty string for an empty string array", () => {
        expect(LongestCommonPrefix([])).toBe("");
    });

    it("returns an empty string if any string in the array is empty", () => {
        expect(LongestCommonPrefix(["", "notempty", "alsoNotEmpty"])).toBe("");
    });

    it("handles case where common prefix ends before the shortest string", () => {
        expect(LongestCommonPrefix(["abcd", "abc", "ab"])).toBe("ab");
    });

    it("handles all identical strings", () => {
        expect(
            LongestCommonPrefix(["identical", "identical", "identical"]),
        ).toBe("identical");
    });
});
