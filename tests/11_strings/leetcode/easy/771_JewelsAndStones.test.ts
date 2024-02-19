import JewelsAndStones from "../../../../src/11_strings/leetcode/easy/771_JewelsAndStones";

describe("JewelsAndStones", () => {
    test("counts jewels in stones correctly", () => {
        expect(JewelsAndStones("aA", "aAAbbbb")).toBe(3);
    });

    test("no jewels in stones", () => {
        expect(JewelsAndStones("z", "ZZ")).toBe(0);
    });

    test("empty jewels string", () => {
        expect(JewelsAndStones("", "aAAbbbb")).toBe(0);
    });

    test("empty stones string", () => {
        expect(JewelsAndStones("aA", "")).toBe(0);
    });

    test("jewels and stones are the same", () => {
        expect(JewelsAndStones("abc", "cba")).toBe(3);
    });

    test("case sensitivity", () => {
        expect(JewelsAndStones("aA", "aAAbbbb")).toBe(3);
        expect(JewelsAndStones("aA", "bbb")).toBe(0);
    });

    test("no repeated counting for unique jewels", () => {
        expect(JewelsAndStones("a", "aaaa")).toBe(4);
    });
});
