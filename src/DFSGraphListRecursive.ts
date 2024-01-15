export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    let seen = new Array(graph.length).fill(false);
    let path: number[] = [];
    walk(graph, source, needle, seen, path);

    return path.length ? path : null;
}

function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    path.push(curr);

    if (curr === needle) {
        return true;
    }

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
        let next = adjs[i].to;

        if (walk(graph, next, needle, seen, path)) {
            return true;
        }
    }

    path.pop();

    return false;
}
