import bridge_points from "../../../src/10_graphs/points/BridgePoints";
import { list4 } from "../../fixtures/graph";

test("bridge_points", function () {
    let bridges = bridge_points(list4);
    expect(bridges).toEqual([
        { from: 3, to: 4, weight: 1 },
        { from: 2, to: 3, weight: 1 },
        { from: 2, to: 5, weight: 1 },
    ]);
});
