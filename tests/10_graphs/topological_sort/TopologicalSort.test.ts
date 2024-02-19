import topological_sort from "../../../src/10_graphs/topological_sort/TopologicalSort";
import { list3 } from "../../fixtures/graph";

test("reverse_bt", function () {
    let ts = topological_sort(list3);
    expect(ts).toEqual([0, 1, 4, 2, 3, 6, 5]);
});
