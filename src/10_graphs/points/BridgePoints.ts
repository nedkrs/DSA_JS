export default function findBridges(graph: WeightedAdjacencyList) {
    let bridges: GraphEdge[] = [];
    let ids: number[] = new Array(graph.length).fill(-1);
    let lowLinks: number[] = new Array(graph.length).fill(-1);
    let seen = new Array(graph.length).fill(false);

    for (let i = 0; i < graph.length; i++) {
        if (!seen[i]) {
            dfs(graph, i, -1, { val: i }, ids, lowLinks, seen, bridges);
        }
    }
    return bridges;
}

function dfs(
    graph: WeightedAdjacencyList,
    current: number,
    parentVertex: number,
    id: { val: number },
    ids: number[],
    lowLinks: number[],
    seen: boolean[],
    bridges: GraphEdge[],
) {
    seen[current] = true;
    ids[current] = lowLinks[current] = id.val;
    for (const nextEdge of graph[current]) {
        const next = nextEdge.to;

        if (next === parentVertex) {
            continue; // Skip the edge to the parent vertex
        }

        if (!seen[next]) {
            id.val++;
            dfs(graph, next, current, id, ids, lowLinks, seen, bridges);
            lowLinks[current] = Math.min(lowLinks[current], lowLinks[next]);

            if (ids[current] < lowLinks[next]) {
                bridges.push(nextEdge);
            }
        } else {
            lowLinks[current] = Math.min(lowLinks[current], ids[next]);
        }
    }
}
