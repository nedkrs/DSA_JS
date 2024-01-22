export default function EulerianCycleDirected(
    graph: WeightedAdjacencyList,
): number[] {
    let path: number[] = [];
    let [in_degree, out_degree, edges_count] = set_up(graph);

    if (!hasEulerianCycle(in_degree, out_degree)) return [];

    let start = 0;

    dfs(graph, start, path, out_degree);

    if (path.length !== edges_count + 1) return [];

    return path.reverse();
}

function set_up(graph: WeightedAdjacencyList): [number[], number[], number] {
    let in_degree: number[] = new Array(graph.length).fill(0);
    let out_degree: number[] = new Array(graph.length).fill(0);
    let edges_count: number = 0;

    for (let i = 0; i < graph.length; i++) {
        const edges = graph[i];
        for (let j = 0; j < edges.length; j++) {
            const edge = edges[j];
            in_degree[edge.to] += 1;
            out_degree[edge.from as number] += 1;
            edges_count++;
        }
    }

    return [in_degree, out_degree, edges_count];
}

function hasEulerianCycle(in_degree: number[], out_degree: number[]): boolean {
    for (let i = 0; i < in_degree.length; i++) {
        if (in_degree[i] !== out_degree[i]) return false;
    }

    return true;
}

function dfs(
    graph: WeightedAdjacencyList,
    at: number,
    path: number[],
    out_degree: number[],
) {
    while (out_degree[at] !== 0) {
        const edge = graph[at][out_degree[at] - 1];
        out_degree[edge.from as number] -= 1;
        dfs(graph, edge.to, path, out_degree);
    }
    path.push(at);
}
