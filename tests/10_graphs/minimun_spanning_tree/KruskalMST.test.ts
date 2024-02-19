import kruskal_mst from "../../../src/10_graphs/minimun_spanning_tree/KruskalMST";
import { list6 } from "../../fixtures/graph";

test("kruskal_mst", function () {
    let mst = kruskal_mst(list6);
    expect(mst).toEqual(37);
});
