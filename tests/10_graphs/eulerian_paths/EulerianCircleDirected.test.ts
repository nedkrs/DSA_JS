import EulerianCycleDirected from "../../../src/10_graphs/eulerian_paths/EulerianCycleDirected";
import { list9 } from "../../fixtures/graph";

test("EulerianCycleDirected", function () {
    expect(EulerianCycleDirected(list9)).toEqual([0, 1, 2, 3, 4, 5, 6, 0]);
});
