export default function topological_sort(graph: WeightedAdjacencyList) {
    let visited: { [key: number]: boolean } = {};
    let tops: number[] = [];

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) dfs(graph, i, tops, visited);
    }

    return tops.reverse();
}

function dfs(
    graph: WeightedAdjacencyList,
    curr: number,
    tops: number[],
    visited: { [key: number]: boolean },
): void {
    visited[curr] = true;

    for (let i = 0; i < graph[curr].length; i++) {
        let next = graph[curr][i].to;
        if (!visited[next]) dfs(graph, next, tops, visited);
    }

    tops.push(curr);
}
