import CountPrimes from "../../../../src/13_maths/leetcode/medium/204_CountPrimes";

describe("CountPrimes", () => {
    test("counts primes less than 10", () => {
        expect(CountPrimes(10)).toBe(4);
    });

    test("counts primes less than 0", () => {
        expect(CountPrimes(0)).toBe(0);
    });

    test("counts primes less than 2", () => {
        expect(CountPrimes(2)).toBe(0);
    });

    test("counts primes less than 3", () => {
        expect(CountPrimes(3)).toBe(1);
    });

    test("counts primes less than 100", () => {
        expect(CountPrimes(100)).toBe(25);
    });

    test("handles large input efficiently", () => {
        const start = Date.now();
        CountPrimes(1000000);
        const end = Date.now();
        expect(end - start).toBeLessThan(1000);
    });
});
