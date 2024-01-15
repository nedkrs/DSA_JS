import articulation_points from "../src/ArticulationPoints";
import { list4 } from "./fixtures/graph";

test("bridge_points", function () {
    let articulation = articulation_points(list4);
    expect(articulation).toEqual([
        false,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
    ]);
});
