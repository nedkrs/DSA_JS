import JohnsonAPSP from "../src/JohnsonAPSP";
import { list10 } from "./fixtures/graph";

test("FloydWarshall", function () {
    let apsp = JohnsonAPSP(list10);

    expect(apsp).toEqual([
        [0, -1, -2, 0, -5],
        [Infinity, 0, 3, 2, 0],
        [Infinity, 1, 0, 2, -3],
        [Infinity, Infinity, Infinity, 0, 3],
        [Infinity, Infinity, Infinity, Infinity, 0],
    ]);
});
