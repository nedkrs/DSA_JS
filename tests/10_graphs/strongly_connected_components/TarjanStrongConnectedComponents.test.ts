import tarjan_strong_connected_components from "../../../src/10_graphs/strongly_connected_components/TarjanStrongConnectedComponents";
import { list5 } from "../../fixtures/graph";

test("tarjan_strong_connected_components", function () {
    let scc = tarjan_strong_connected_components(list5);
    expect(scc).toEqual(5);
});
