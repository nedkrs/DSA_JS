export default function kahn_topological_sort(
    graph: WeightedAdjacencyList,
): number[] {
    let in_order: number[] = new Array(graph.length).fill(0);
    let queue: number[] = [];

    for (let i = 0; i < graph.length; i++) {
        const node = graph[i];
        node.forEach((edge) => {
            in_order[edge.to]++;
        });
    }

    for (let i = 0; i < in_order.length; i++) {
        if (in_order[i] === 0) {
            queue.push(i);
        }
    }

    let ts: number[] = [];

    while (queue.length > 0) {
        let curr = queue.pop() as number;
        for (let i = 0; i < graph[curr].length; i++) {
            const next = graph[curr][i];
            in_order[next.to]--;
            if (in_order[next.to] === 0) {
                queue.push(next.to);
            }
        }
        ts.push(curr);
    }

    if (ts.length < graph.length) {
        return [];
    }

    return ts;
}
