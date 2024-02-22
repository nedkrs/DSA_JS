import DecodeString from "../../../../src/03_stack/leetcode/medium/394_DecodeString";

describe("DecodeString", () => {
    test("decodes a simple encoded string", () => {
        expect(DecodeString("4[ab]")).toBe("abababab");
    });

    test("decodes a nested encoded string", () => {
        expect(DecodeString("2[b3[a]]")).toBe("baaabaaa");
    });

    test("decodes a more complex encoded string", () => {
        expect(DecodeString("2[b3[a2[c]]]")).toBe("baccaccaccbaccaccacc");
    });

    test("decodes an encoded string with multiple encodings", () => {
        expect(DecodeString("3[a]2[bc]")).toBe("aaabcbc");
    });

    test("decodes an encoded string with numbers inside", () => {
        expect(DecodeString("2[3[a]b]")).toBe("aaabaaab");
    });
});
