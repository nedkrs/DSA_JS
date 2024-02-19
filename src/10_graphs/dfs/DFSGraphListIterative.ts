export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    let seen = new Array(graph.length).fill(false);
    let prev = new Array(graph.length).fill(-1);
    let stack = [source];
    seen[source] = true;

    while (stack.length > 0) {
        let curr = stack.pop() as number;

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];

        for (let i = 0; i < adjs.length; i++) {
            let next = adjs[i].to;
            if (seen[next]) continue;
            seen[next] = true;
            prev[next] = curr;
            stack.push(next);
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    let curr = needle;
    let path = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }

    return [source, ...path.reverse()];
}
