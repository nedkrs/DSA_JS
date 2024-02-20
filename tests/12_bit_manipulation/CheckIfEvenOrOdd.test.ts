import CheckIfEvenOrOdd from "../../src/12_bit_manipulation/CheckIfEvenOrOdd";

describe("CheckIfEvenOrOdd", () => {
    test('returns "even" for 0', () => {
        expect(CheckIfEvenOrOdd(0)).toBe("even");
    });

    test('returns "even" for 2', () => {
        expect(CheckIfEvenOrOdd(2)).toBe("even");
    });

    test('returns "odd" for 1', () => {
        expect(CheckIfEvenOrOdd(1)).toBe("odd");
    });

    test('returns "odd" for 3', () => {
        expect(CheckIfEvenOrOdd(3)).toBe("odd");
    });

    test('returns "even" for negative even number', () => {
        expect(CheckIfEvenOrOdd(-4)).toBe("even");
    });

    test('returns "odd" for negative odd number', () => {
        expect(CheckIfEvenOrOdd(-3)).toBe("odd");
    });

    test('returns "even" for large even number', () => {
        expect(CheckIfEvenOrOdd(1000000)).toBe("even");
    });

    test('returns "odd" for large odd number', () => {
        expect(CheckIfEvenOrOdd(1000001)).toBe("odd");
    });
});
