import CourseSchedule from "../../../../../src/10_graphs/topological_sort/leetcode/medium/207_CourseSchedule";

describe("CourseSchedule", () => {
    test("should return true when no courses", () => {
        expect(CourseSchedule(0, [])).toBe(true);
    });

    test("should return true when no prerequisites", () => {
        expect(CourseSchedule(2, [])).toBe(true);
    });

    test("should return true for linearly dependent courses", () => {
        expect(
            CourseSchedule(3, [
                [0, 1],
                [1, 2],
            ]),
        ).toBe(true);
    });

    test("should return false for a simple cycle", () => {
        expect(
            CourseSchedule(2, [
                [0, 1],
                [1, 0],
            ]),
        ).toBe(false);
    });

    test("should return false for a complex cycle", () => {
        expect(
            CourseSchedule(4, [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 1],
            ]),
        ).toBe(false);
    });

    test("should return true for complex dependencies without cycles", () => {
        expect(
            CourseSchedule(5, [
                [1, 0],
                [2, 1],
                [3, 2],
                [1, 4],
            ]),
        ).toBe(true);
    });

    test("should return true for disjoint graph without cycles", () => {
        expect(
            CourseSchedule(4, [
                [0, 1],
                [2, 3],
            ]),
        ).toBe(true);
    });
});
