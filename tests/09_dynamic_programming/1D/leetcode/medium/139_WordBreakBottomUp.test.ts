import WordBreakBottomUp from "../../../../../src/09_dynamic_programming/1D/leetcode/medium/139_WordBreakBottomUp";

describe("WordBreakBottomUp", () => {
    test("string can be segmented", () => {
        expect(WordBreakBottomUp("leetcode", ["leet", "code"])).toBeTruthy();
    });

    test("string cannot be segmented", () => {
        expect(WordBreakBottomUp("leetacode", ["leet", "code"])).toBeFalsy();
    });

    test("longer string", () => {
        expect(
            WordBreakBottomUp("applepenapple", ["apple", "pen"]),
        ).toBeTruthy();
    });

    test("empty string", () => {
        expect(WordBreakBottomUp("", ["leet", "code"])).toBeTruthy();
    });

    test("empty word dictionary", () => {
        expect(WordBreakBottomUp("leetcode", [])).toBeFalsy();
    });

    test("string with overlapping word choices", () => {
        expect(
            WordBreakBottomUp("catsanddog", [
                "cat",
                "cats",
                "and",
                "sand",
                "dog",
            ]),
        ).toBeTruthy();
    });

    test("string with no word choices from the dictionary", () => {
        expect(
            WordBreakBottomUp("catsandog", [
                "cat",
                "cats",
                "and",
                "sand",
                "dog",
            ]),
        ).toBeFalsy();
    });
});
