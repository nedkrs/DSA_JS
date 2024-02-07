import LetterCombinationsOfAPhoneNumber from "../../../../../src/14_combinatorics/combinations/leetcode/medium/17_LetterCombinationsOfAPhoneNumber";

describe("LetterCombinationsOfAPhoneNumber", () => {
    test("empty string", () => {
        expect(LetterCombinationsOfAPhoneNumber("")).toEqual([]);
    });

    test("single digit", () => {
        expect(LetterCombinationsOfAPhoneNumber("2")).toEqual(["a", "b", "c"]);
    });

    test("two digits", () => {
        expect(LetterCombinationsOfAPhoneNumber("23")).toEqual([
            "ad",
            "ae",
            "af",
            "bd",
            "be",
            "bf",
            "cd",
            "ce",
            "cf",
        ]);
    });

    test("three digits", () => {
        expect(LetterCombinationsOfAPhoneNumber("234")).toEqual([
            "adg",
            "adh",
            "adi",
            "aeg",
            "aeh",
            "aei",
            "afg",
            "afh",
            "afi",
            "bdg",
            "bdh",
            "bdi",
            "beg",
            "beh",
            "bei",
            "bfg",
            "bfh",
            "bfi",
            "cdg",
            "cdh",
            "cdi",
            "ceg",
            "ceh",
            "cei",
            "cfg",
            "cfh",
            "cfi",
        ]);
    });

    test("digit with four letters", () => {
        expect(LetterCombinationsOfAPhoneNumber("7")).toEqual([
            "p",
            "q",
            "r",
            "s",
        ]);
    });
});
