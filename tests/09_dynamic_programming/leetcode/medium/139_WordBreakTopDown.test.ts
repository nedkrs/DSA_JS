import WordBreakTopDown from "../../../../src/09_dynamic_programming/leetcode/medium/139_WordBreakTopDown";

describe("WordBreakBottomUp", () => {
    test("string can be segmented", () => {
        expect(WordBreakTopDown("leetcode", ["leet", "code"])).toBeTruthy();
    });

    test("string cannot be segmented", () => {
        expect(WordBreakTopDown("leetacode", ["leet", "code"])).toBeFalsy();
    });

    test("longer string", () => {
        expect(
            WordBreakTopDown("applepenapple", ["apple", "pen"]),
        ).toBeTruthy();
    });

    test("empty string", () => {
        expect(WordBreakTopDown("", ["leet", "code"])).toBeTruthy();
    });

    test("empty word dictionary", () => {
        expect(WordBreakTopDown("leetcode", [])).toBeFalsy();
    });

    test("string with overlapping word choices", () => {
        expect(
            WordBreakTopDown("catsanddog", [
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
            WordBreakTopDown("catsandog", [
                "cat",
                "cats",
                "and",
                "sand",
                "dog",
            ]),
        ).toBeFalsy();
    });
});
