export default function BellmanFord(
    graph: WeightedAdjacencyList,
    startVertex: number,
    endVertex?: number,
) {
    let dists = graph.map((i) => Infinity);
    let prev = graph.map((i) => -1);
    let edges = graph.map((adjs) => adjs).flat();
    dists[startVertex] = 0;

    for (let i = 0; i < graph.length - 1; i++) {
        for (let j = 0; j < edges.length; j++) {
            const edge = edges[j];
            const from = edge.from as number;
            const to = edge.to;
            const weigth = edge.weight;

            if (dists[from] + weigth < dists[to]) {
                dists[to] = dists[from] + weigth;
                prev[to] = from;
            }
        }
    }

    let visited = graph.map((i) => false);
    let ncycle: number[] = [];

    for (let j = 0; j < edges.length; j++) {
        let edge = edges[j];
        let from = edge.from as number;
        let to = edge.to;
        let weigth = edge.weight;

        if (dists[from] + weigth < dists[to]) {
            //cycle detected, find vertex in cycle
            visited[to] = true;
            prev[to] = from;

            while (!visited[from]) {
                visited[from] = true;
                from = prev[from];
            }

            // from is in cycle, find others
            let u = from;
            ncycle[0] = u;
            let v = prev[u];
            while (v !== u) {
                ncycle.push(v);
                v = prev[v];
            }
            return { path: ncycle, dists };
        }
    }

    if (endVertex === undefined) return { path: ncycle, dists };

    let sink = endVertex;
    let path = [];
    while (prev[sink] !== -1) {
        path.push(sink);
        sink = prev[sink];
    }

    return { path: [startVertex, ...path.reverse()], dists };
}
