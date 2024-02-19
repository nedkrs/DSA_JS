import ValidParentheses from "../../../../src/03_stack/leetcode/easy/20_ValidParentheses";

describe("ValidParentheses", () => {
    test("returns true for empty string", () => {
        expect(ValidParentheses("")).toBe(true);
    });

    test('returns true for valid parentheses "()"', () => {
        expect(ValidParentheses("()")).toBe(true);
    });

    test('returns true for valid mixed pairs "({[]})"', () => {
        expect(ValidParentheses("({[]})")).toBe(true);
    });

    test('returns false for single opening bracket "["', () => {
        expect(ValidParentheses("[")).toBe(false);
    });

    test('returns false for incorrect closing order "([)]"', () => {
        expect(ValidParentheses("([)]")).toBe(false);
    });

    test('returns false for string with only opening brackets "(((("', () => {
        expect(ValidParentheses("((((")).toBe(false);
    });

    test('returns false for string with only closing brackets "))))"', () => {
        expect(ValidParentheses("))))")).toBe(false);
    });

    test('returns true for complex valid string "{[()()]()}"', () => {
        expect(ValidParentheses("{[()()]()}")).toBe(true);
    });

    test('returns false for valid structures interrupted by characters "([a])"', () => {
        expect(ValidParentheses("([a])")).toBe(false);
    });

    test('returns true for nested valid structures "([]{{[]}})"', () => {
        expect(ValidParentheses("([]{{[]}})")).toBe(true);
    });
});
