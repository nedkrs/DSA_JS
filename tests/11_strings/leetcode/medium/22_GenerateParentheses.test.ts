import GenerateParentheses from "../../../../src/11_strings/leetcode/medium/22_GenerateParentheses";

describe("GenerateParentheses", () => {
    test("generates combinations for n = 0", () => {
        expect(GenerateParentheses(0)).toEqual([""]);
    });

    test("generates combinations for n = 1", () => {
        expect(GenerateParentheses(1)).toEqual(["()"]);
    });

    test("generates combinations for n = 2", () => {
        const expected = ["(())", "()()"];
        const result = GenerateParentheses(2);
        expect(result.sort()).toEqual(expected.sort());
    });

    test("generates combinations for n = 3", () => {
        const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
        const result = GenerateParentheses(3);
        expect(result.sort()).toEqual(expected.sort());
    });

    test("generates combinations for n = 4", () => {
        const expected = [
            "(((())))",
            "((()()))",
            "((())())",
            "((()))()",
            "(()(()))",
            "(()()())",
            "(()())()",
            "(())(())",
            "(())()()",
            "()((()))",
            "()(()())",
            "()(())()",
            "()()(())",
            "()()()()",
        ];
        const result = GenerateParentheses(4);
        expect(result.sort()).toEqual(expected.sort());
    });
});
