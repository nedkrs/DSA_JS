import kahn_topological_sort from "../src/KahnTopologicalSort";
import { list3 } from "./fixtures/graph";

test("kahn_topological_sort", function () {
    let ts = kahn_topological_sort(list3);
    expect(ts).toEqual([0, 1, 4, 2, 3, 6, 5]);
});
