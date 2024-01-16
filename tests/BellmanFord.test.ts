import BellmanFord from "../src/BellmanFord";
import { list7 } from "./fixtures/graph";

describe("BellmanFord Tests", () => {
    test("should find negative cycle", function () {
        expect(BellmanFord(list7, 0, 8)).toEqual([3, 2, 10]);
    });

    test("should find shortest path", function () {
        list7[3] = [{ from: 3, to: 2, weight: 10 }];
        expect(BellmanFord(list7, 0, 8)).toEqual([0, 1, 5, 6, 7, 8]);
    });
});
