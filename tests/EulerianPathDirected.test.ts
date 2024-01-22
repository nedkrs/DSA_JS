import EulerianPath from "../src/EulerianPathDirected";
import { list8 } from "./fixtures/graph";

test("EulerianPathDirected", function () {
    expect(EulerianPath(list8)).toEqual([
        1, 3, 5, 6, 3, 2, 4, 3, 1, 2, 2, 4, 6,
    ]);
});
