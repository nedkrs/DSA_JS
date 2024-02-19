import kosaraju_strong_connected_components from "../../../src/10_graphs/strongly_connected_components/KosarajuStrongConnectedComponents";
import { list5 } from "../../fixtures/graph";

test("kosaraju_strong_connected_components", function () {
    let scc = kosaraju_strong_connected_components(list5);
    expect(scc).toEqual(5);
});
