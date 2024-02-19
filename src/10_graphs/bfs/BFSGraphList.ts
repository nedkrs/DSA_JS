export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    let q = [source];
    let seen = new Array(graph.length).fill(false);
    let prev = new Array(graph.length).fill(-1);
    seen[source] = true;

    while (q.length > 0) {
        let curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];

        for (let i = 0; i < adjs.length; i++) {
            let next = adjs[i].to;
            if (seen[next]) continue;
            seen[next] = true;
            prev[next] = curr;
            q.push(next);
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
