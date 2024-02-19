import BellmanFord from "../single_source_shortest_paths/BellmanFord";
import dijkstra_list from "../single_source_shortest_paths/DijkstraListFast";

export default function JohnsonsAPSP(graph: WeightedAdjacencyList) {
    addVertexToGraph(graph);
    let { dists } = BellmanFord(graph, graph.length - 1);
    removeVertexFromGraph(graph);
    add_weight(graph, dists);

    let apsp = [];

    for (let i = 0; i < graph.length; i++) {
        let { dists: single_dists } = dijkstra_list(graph, i);
        remove_weight(single_dists, dists, i);
        apsp.push(single_dists);
    }

    return apsp;
}

function addVertexToGraph(graph: WeightedAdjacencyList): void {
    let q = [];

    for (let i = 0; i < graph.length; i++) {
        q.push({ from: graph.length, to: i, weight: 0 });
    }

    graph.push(q);
}

function removeVertexFromGraph(graph: WeightedAdjacencyList): void {
    graph.pop();
}

function add_weight(graph: WeightedAdjacencyList, dists: number[]): void {
    for (let i = 0; i < graph.length; i++) {
        let edges = graph[i];
        for (let j = 0; j < edges.length; j++) {
            edges[j].weight =
                edges[j].weight +
                dists[edges[j].from as number] -
                dists[edges[j].to];
        }
    }
}

function remove_weight(
    dists_new: number[],
    dists_old: number[],
    source: number,
): void {
    for (let i = 0; i < dists_new.length; i++) {
        let hu = dists_old[source];
        let hv = dists_old[i];

        dists_new[i] = dists_new[i] + hv - hu;
    }
}
