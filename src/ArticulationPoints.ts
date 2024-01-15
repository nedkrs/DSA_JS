export default function articulation_points(graph: WeightedAdjacencyList) {
    let bridges: GraphEdge[] = [];
    let ids: number[] = new Array(graph.length).fill(-1);
    let lowLinks: number[] = new Array(graph.length).fill(-1);
    let seen = new Array(graph.length).fill(false);
    let isArt = new Array(graph.length).fill(false);
    let outEdgeCount = 0;

    for (let i = 0; i < graph.length; i++) {
        if (!seen[i]) {
            outEdgeCount = 0;
            dfs(graph, i, -1, { val: i }, ids, lowLinks, seen, bridges, isArt);
            isArt[i] = outEdgeCount > 1;
        }
    }
    return isArt;
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
    isArt: boolean[],
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
            dfs(graph, next, current, id, ids, lowLinks, seen, bridges, isArt);
            lowLinks[current] = Math.min(lowLinks[current], lowLinks[next]);

            if (ids[current] < lowLinks[next]) {
                isArt[current] = true;
            }
            if (ids[current] === lowLinks[next]) {
                isArt[current] = true;
            }
        } else {
            lowLinks[current] = Math.min(lowLinks[current], ids[next]);
        }
    }
}
