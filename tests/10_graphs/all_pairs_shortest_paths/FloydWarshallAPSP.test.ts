import FloydWarshall, {
    getPath,
} from "../../../src/10_graphs/all_pairs_shortest_paths/FloydWarshallAPSP";
import { matrix2 } from "../../fixtures/graph";

test("FloydWarshall", function () {
    let [dp, next] = FloydWarshall(matrix2);

    expect(dp).toEqual([
        [0, 3, 1, 8, 4, 6, 7],
        [Infinity, 0, 21, 5, 1, 3, 4],
        [Infinity, Infinity, 0, 7, Infinity, Infinity, Infinity],
        [Infinity, Infinity, Infinity, 0, Infinity, Infinity, Infinity],
        [Infinity, 1, 20, 4, 0, 2, 3],
        [Infinity, Infinity, 18, 2, Infinity, 0, 1],
        [Infinity, Infinity, Infinity, 1, Infinity, Infinity, 0],
    ]);

    let path = getPath(next, 5, 1);

    expect(path).toEqual([]);

    path = getPath(next, 0, 6);

    expect(path).toEqual([0, 1, 4, 5, 6]);
});
