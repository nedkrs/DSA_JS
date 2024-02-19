import dijkstra_list from "../../../src/10_graphs/single_source_shortest_paths/DijkstraListSlow";
import { list1 } from "../../fixtures/graph";

test("dijkstra via adj list", function () {
    expect(dijkstra_list(list1, 0, 6).path).toEqual([0, 1, 4, 5, 6]);
});
