import prim_mst from "../../../src/10_graphs/minimun_spanning_tree/PrimsMST";
import { list6 } from "../../fixtures/graph";

test("prim_mst", function () {
    let mst = prim_mst(list6, 0);
    expect(mst).toEqual(37);
});
