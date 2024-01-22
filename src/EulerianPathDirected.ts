export default function EulerianPathDirected(
    graph: WeightedAdjacencyList,
): number[] {
    let path: number[] = [];
    let [in_degree, out_degree, edges_count] = set_up(graph);

    if (!hasEulerianPath(in_degree, out_degree)) return [];

    let start = findStartVertex(in_degree, out_degree);

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

function hasEulerianPath(in_degree: number[], out_degree: number[]): boolean {
    let max_out_odd = 0;
    let max_in_odd = 0;

    for (let i = 0; i < in_degree.length; i++) {
        if (in_degree[i] === out_degree[i]) continue;

        if (in_degree[i] - out_degree[i] === 1) max_in_odd++;
        else if (out_degree[i] - in_degree[i] === 1) max_out_odd++;
        else return false;
    }

    return (
        (max_in_odd === 0 && max_out_odd === 0) ||
        (max_in_odd === 1 && max_out_odd === 1)
    );
}

function findStartVertex(in_degree: number[], out_degree: number[]): number {
    for (let i = 0; i < in_degree.length; i++) {
        if (out_degree[i] - in_degree[i] === 1) return i;
    }

    return 0;
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
