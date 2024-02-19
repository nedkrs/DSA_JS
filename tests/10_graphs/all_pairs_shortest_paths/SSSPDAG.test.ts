import ssst_dag from "../../../src/10_graphs/single_source_shortest_paths/SSSPDAG";
import { list3 } from "../../fixtures/graph";

test("reverse_bt", function () {
    let [length, path] = ssst_dag(list3, 0, 5);

    expect(path).toEqual([0, 1, 4, 3, 6, 5]);
    expect(length).toEqual(11);

    [length, path] = ssst_dag(list3, 2, 5);
    expect(path).toEqual([2, 3, 6, 5]);
    expect(length).toEqual(9);

    [length, path] = ssst_dag(list3, 2, 1);
    expect(path).toEqual(undefined);
    expect(length).toEqual(undefined);
});
