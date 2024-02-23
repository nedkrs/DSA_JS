import QueueReconstructionByHeight from "../../../../src/06_sorting/leetcode/medium/406_QueueReconstructionByHeight";

describe("QueueReconstructionByHeight", () => {
    test("handles an empty array", () => {
        expect(QueueReconstructionByHeight([])).toEqual([]);
    });

    test("handles a single person", () => {
        expect(QueueReconstructionByHeight([[5, 0]])).toEqual([[5, 0]]);
    });

    test("reconstructs a queue of two people", () => {
        expect(
            QueueReconstructionByHeight([
                [7, 0],
                [4, 0],
            ]),
        ).toEqual([
            [4, 0],
            [7, 0],
        ]);
    });

    test("reconstructs a queue of multiple people", () => {
        expect(
            QueueReconstructionByHeight([
                [7, 0],
                [4, 4],
                [7, 1],
                [5, 0],
                [6, 1],
                [5, 2],
            ]),
        ).toEqual([
            [5, 0],
            [7, 0],
            [5, 2],
            [6, 1],
            [4, 4],
            [7, 1],
        ]);
    });

    test("reconstructs another complex queue", () => {
        expect(
            QueueReconstructionByHeight([
                [6, 0],
                [5, 0],
                [4, 0],
                [3, 2],
                [2, 2],
                [1, 4],
            ]),
        ).toEqual([
            [4, 0],
            [5, 0],
            [2, 2],
            [3, 2],
            [1, 4],
            [6, 0],
        ]);
    });
});
