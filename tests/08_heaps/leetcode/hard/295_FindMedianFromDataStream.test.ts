import FindMedianFromDataStream from "../../../../src/08_heaps/leetcode/hard/295_FindMedianFromDataStream";

describe("MedianFinder functionality", () => {
    let medianFinder: FindMedianFromDataStream;

    beforeEach(() => {
        medianFinder = new FindMedianFromDataStream();
    });

    test("correctly finds the median of a single element", () => {
        medianFinder.addNum(1);
        expect(medianFinder.findMedian()).toBe(1);
    });

    test("correctly finds the median of two elements", () => {
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        expect(medianFinder.findMedian()).toBe(1.5);
    });

    test("correctly finds the median of three elements", () => {
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        medianFinder.addNum(3);
        expect(medianFinder.findMedian()).toBe(2);
    });

    test("maintains the median with mixed insertion order", () => {
        medianFinder.addNum(5);
        medianFinder.addNum(1);
        medianFinder.addNum(3);
        medianFinder.addNum(4);
        medianFinder.addNum(2);
        expect(medianFinder.findMedian()).toBe(3);
    });

    test("correctly finds the median with negative numbers", () => {
        medianFinder.addNum(-1);
        medianFinder.addNum(-2);
        medianFinder.addNum(-3);
        medianFinder.addNum(-4);
        medianFinder.addNum(-5);
        expect(medianFinder.findMedian()).toBe(-3);
    });

    test("handles large numbers", () => {
        medianFinder.addNum(1000);
        medianFinder.addNum(2000);
        expect(medianFinder.findMedian()).toBe(1500);
    });

    test("correctly adjusts the median when moving from even to odd number of elements", () => {
        medianFinder.addNum(1);
        medianFinder.addNum(2);
        medianFinder.addNum(3);
        medianFinder.addNum(4);
        expect(medianFinder.findMedian()).toBe(2.5);
        medianFinder.addNum(5);
        expect(medianFinder.findMedian()).toBe(3);
    });
});
