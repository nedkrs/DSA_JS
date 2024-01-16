export default function FloydWarshall(
    graph: WeightedAdjacencyMatrix,
): [number[][], number[][]] {
    let V = graph.length;
    let dp: number[][] = [];
    let next: number[][] = [];

    for (let i = 0; i < graph.length; i++) {
        dp[i] = [];
        next[i] = [];
        for (let j = 0; j < graph[i].length; j++) {
            if (i === j) {
                dp[i][j] = 0;
                next[i][j] = -1;
            } else if (graph[i][j] !== Infinity) {
                dp[i][j] = graph[i][j];
                next[i][j] = j;
            } else {
                dp[i][j] = Infinity;
                next[i][j] = -1;
            }
        }
    }

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dp[i][j] > dp[i][k] + dp[k][j]) {
                    dp[i][j] = dp[i][k] + dp[k][j];
                    next[i][j] = next[i][k];
                }
            }
        }
    }
    return [dp, next];
}

export function getPath(next: number[][], i: number, j: number): number[] {
    if (next[i][j] === -1) return [];

    let path: number[] = [i];

    while (i !== j) {
        i = next[i][j];

        // check for an invalid path to prevent infinite loop
        if (i === -1) return [];

        path.push(i);
    }

    return path;
}
