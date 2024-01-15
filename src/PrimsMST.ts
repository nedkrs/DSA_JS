import PriorityIndexedMinQueue from "./PriorityIndexedMinQueue";

export default function primsAlgorithm(
    graph: WeightedAdjacencyList,
    startVertex: number,
): number {
    let unseen = new PriorityIndexedMinQueue();
    let visited = new Set<number>();
    let mst = 0;

    // variables for maping identifiers and edges
    let idxToEdge: {
        [key: number]: { from: number; to: number; weight: number };
    } = { 0: { from: startVertex, to: startVertex, weight: 0 } };
    let edgeToIdx: { [key: string]: number } = { "0:0:0": 0 };

    // uniquely identify every edge
    let idx = 0;
    for (let i = 0; i < graph.length; i++) {
        const edges = graph[i];
        for (let j = 0; j < edges.length; j++) {
            const edge = edges[j];
            idxToEdge[idx] = {
                from: edge.from as number,
                to: edge.to,
                weight: edge.weight,
            };
            edgeToIdx[`${edge.from}:${edge.to}:${edge.weight}`] = idx;
            idx++;
        }
    }

    // visit start vertex and add its edges to IPQ
    visited.add(startVertex);
    const startEdges = graph[startVertex];
    for (let i = 0; i < startEdges.length; i++) {
        const edge = startEdges[i];
        const tmpIdx = edgeToIdx[`${edge.from}:${edge.to}:${edge.weight}`];
        unseen.insert(tmpIdx, edge.weight);
    }

    // start the loop
    while (!unseen.isEmpty()) {
        let identifier = unseen.deleteMinimum();
        let curr = idxToEdge[identifier];

        if (visited.has(curr.to)) continue;
        visited.add(curr.to);
        mst += curr.weight;

        const adjs = graph[curr.to];
        for (let i = 0; i < adjs.length; i++) {
            const next = adjs[i];

            if (visited.has(next.to)) continue;

            const nextIdx = edgeToIdx[`${next.from}:${next.to}:${next.weight}`];

            if (
                unseen.contains(nextIdx) &&
                unseen.getPriority(nextIdx) > next.weight
            ) {
                unseen.decreaseKey(nextIdx, next.weight);
            } else {
                unseen.insert(nextIdx, next.weight);
            }
        }
    }

    return mst;
}
