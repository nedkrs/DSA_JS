import AddBinary from "../../../../src/13_maths/leetcode/easy/67_AddBinary";

describe("AddBinary", () => {
    test("adds two binary strings resulting in no carry", () => {
        expect(AddBinary("101", "110")).toBe("1011");
    });

    test("adds two binary strings with carry", () => {
        expect(AddBinary("111", "1")).toBe("1000");
    });

    test('adds two binary strings where one is "0"', () => {
        expect(AddBinary("0", "1101")).toBe("1101");
        expect(AddBinary("1101", "0")).toBe("1101");
    });

    test('adds two binary strings both "0"', () => {
        expect(AddBinary("0", "0")).toBe("0");
    });

    test("adds two binary strings resulting in all carry", () => {
        expect(AddBinary("1111", "1111")).toBe("11110");
    });

    test("adds one empty string and one non-empty string", () => {
        expect(AddBinary("", "101")).toBe("101");
        expect(AddBinary("101", "")).toBe("101");
    });
});
