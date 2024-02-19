import HappyNumber from "../../../../src/13_maths/leetcode/easy/202_HappyNumber";

describe("HappyNumber", () => {
    test("19 is a happy number", () => {
        expect(HappyNumber(19)).toBe(true);
    });

    test("2 is not a happy number", () => {
        expect(HappyNumber(2)).toBe(false);
    });

    test("1 is a happy number", () => {
        expect(HappyNumber(1)).toBe(true);
    });

    test("7 is a happy number", () => {
        expect(HappyNumber(7)).toBe(true);
    });

    test("4 is not a happy number", () => {
        expect(HappyNumber(4)).toBe(false);
    });

    test("16 is not a happy number", () => {
        expect(HappyNumber(16)).toBe(false);
    });

    test("100 is a happy number", () => {
        expect(HappyNumber(100)).toBe(true);
    });

    test("Large number test", () => {
        expect(HappyNumber(9999999)).toBe(false);
    });
});
