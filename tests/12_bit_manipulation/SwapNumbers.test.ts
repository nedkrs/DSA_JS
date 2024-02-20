// SwapNumbers.test.js
import SwapNumbers from "../../src/12_bit_manipulation/SwapNumbers";

describe("SwapNumbers function", () => {
    test("should swap positive numbers correctly", () => {
        expect(SwapNumbers(10, 5)).toEqual([5, 10]);
    });

    test("should swap negative numbers correctly", () => {
        expect(SwapNumbers(-10, -5)).toEqual([-5, -10]);
    });

    test("should swap a positive and a negative number correctly", () => {
        expect(SwapNumbers(10, -5)).toEqual([-5, 10]);
    });

    test("should swap with zero correctly", () => {
        expect(SwapNumbers(0, 5)).toEqual([5, 0]);
    });

    test("should swap two zeros correctly", () => {
        expect(SwapNumbers(0, 0)).toEqual([0, 0]);
    });

    test("should swap identical numbers without change", () => {
        expect(SwapNumbers(5, 5)).toEqual([5, 5]);
    });
});
