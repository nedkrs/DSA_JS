import UnionFind from "./UnionFind";

export default function kruskalsAlgorithm(
    graph: WeightedAdjacencyList,
): number {
    let mst = 0;
    let union = new UnionFind(graph.length);
    let edges = sortEdges(graph);
    let numOfEdges = 0;
    let i = 0;

    while (numOfEdges < graph.length - 1) {
        let edge = edges[i];
        let from = edge.from as number;
        let to = edge.to;

        if (union.isConnected(from, to)) {
            i++;
            continue;
        }

        let rootFrom = union.find(from);
        let rootTo = union.find(to);
        union.union(rootFrom, rootTo);

        numOfEdges++;
        mst += edge.weight;
        i++;
    }

    return mst;
}

function sortEdges(graph: WeightedAdjacencyList): GraphEdge[] {
    let allEdges: GraphEdge[] = [];

    for (let i = 0; i < graph.length; i++) {
        const edges = graph[i];
        for (let j = 0; j < edges.length; j++) {
            const edge = edges[j];
            allEdges.push(edge);
        }
    }

    return allEdges.sort((a, b) => a.weight - b.weight);
}
