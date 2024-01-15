export default function kosaraju_strong_connected_components(
    graph: WeightedAdjacencyList,
) {
    let stack: number[] = [];
    let visited = new Array(graph.length).fill(false);
    let scc = 0;

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            first_dfs(graph, i, stack, visited);
        }
    }

    let reversed_graph = reverse_graph(graph);

    visited = new Array(reversed_graph.length).fill(false);

    while (stack.length > 0) {
        let curr = stack.pop() as number;

        if (!visited[curr]) {
            last_dfs(reversed_graph, curr, visited);
            scc++;
        }
    }

    return scc;
}

function last_dfs(
    graph: WeightedAdjacencyList,
    current: number,
    visited: boolean[],
) {
    visited[current] = true;

    const adjs = graph[current];
    for (let i = 0; i < adjs.length; i++) {
        let next = adjs[i];

        if (!visited[next.to]) {
            last_dfs(graph, next.to, visited);
        }
    }
}

function first_dfs(
    graph: WeightedAdjacencyList,
    current: number,
    stack: number[],
    visited: boolean[],
) {
    visited[current] = true;

    const adjs = graph[current];
    for (let i = 0; i < adjs.length; i++) {
        let next = adjs[i];

        if (!visited[next.to]) {
            first_dfs(graph, next.to, stack, visited);
        }
    }

    stack.push(current);
}

function reverse_graph(graph: WeightedAdjacencyList) {
    let reversed_graph: WeightedAdjacencyList = graph.map(() => []);

    graph.forEach((adjs, _) => {
        adjs.forEach((edge) => {
            reversed_graph[edge.to].push({
                from: edge.to,
                to: edge.from as number,
                weight: edge.weight,
            });
        });
    });

    return reversed_graph;
}
