import topological_sort from "../topological_sort/TopologicalSort";

export default function SSSPDAG(
    graph: WeightedAdjacencyList,
    start: number,
    end: number,
) {
    const ts = topological_sort(graph);
    const ts_cut = ts.slice(ts.indexOf(start));
    const dists = new Array(ts.length).fill(Infinity);
    const prev = new Array(ts.length).fill(-1);
    dists[start] = 0;

    for (let i = 0; i < ts_cut.length; i++) {
        let curr = ts_cut[i];

        const adjs = graph[curr];
        for (let j = 0; j < adjs.length; j++) {
            let next = adjs[j];

            if (dists[curr] + next.weight < dists[next.to]) {
                dists[next.to] = dists[curr] + next.weight;
                prev[next.to] = curr;
            }
        }
    }

    if (prev[end] === -1) {
        return [undefined, undefined];
    }

    let curr = end;
    let path = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }

    return [dists[end], [start, ...path.reverse()]];
}
