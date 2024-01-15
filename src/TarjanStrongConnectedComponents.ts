export default function tarjan_strong_connected_components(
    graph: WeightedAdjacencyList,
) {
    let ids: number[] = new Array(graph.length).fill(-1);
    let lowLinks: number[] = new Array(graph.length).fill(-1);
    let seen = new Array(graph.length).fill(false);
    let scc = { val: 0 };
    let stack: number[] = [];
    let inStack = new Array(graph.length).fill(false);

    for (let i = 0; i < graph.length; i++) {
        if (!seen[i]) {
            dfs(graph, i, { val: i }, ids, lowLinks, seen, stack, inStack, scc);
        }
    }
    return scc.val;
}

function dfs(
    graph: WeightedAdjacencyList,
    current: number,
    id: { val: number },
    ids: number[],
    lowLinks: number[],
    seen: boolean[],
    stack: number[],
    inStack: boolean[],
    scc: { val: number },
) {
    seen[current] = true;
    ids[current] = lowLinks[current] = id.val;
    stack.push(current);
    inStack[current] = true;

    for (const nextEdge of graph[current]) {
        const next = nextEdge.to;

        if (!seen[next]) {
            id.val++;
            dfs(graph, next, id, ids, lowLinks, seen, stack, inStack, scc);
            lowLinks[current] = Math.min(lowLinks[current], lowLinks[next]);
        } else if (inStack[next]) {
            lowLinks[current] = Math.min(lowLinks[current], ids[next]);
        }
    }

    if (ids[current] === lowLinks[current]) {
        while (stack.length > 0) {
            let node = stack.pop() as number;
            inStack[node] = false;
            if (node === current) break;
        }
        scc.val++;
    }
}
