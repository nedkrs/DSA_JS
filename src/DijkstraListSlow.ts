export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    let seen = new Array(arr.length).fill(false);
    let prev = new Array(arr.length).fill(-1);
    let dists = new Array(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        let curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;
        const adjs = arr[curr];

        for (let i = 0; i < adjs.length; i++) {
            const next = adjs[i];
            const newDistToNext = dists[curr] + next.weight;
            if (newDistToNext < dists[next.to]) {
                dists[next.to] = newDistToNext;
                prev[next.to] = curr;
            }
        }
    }

    if (prev[sink] === -1) {
        return [];
    }

    let curr = sink;
    let path = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }

    return [source, ...path.reverse()];
}

function hasUnvisited(seen: boolean[], dists: number[]) {
    return seen.some((it, idx) => !it && dists[idx] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]) {
    let idx = Infinity;
    let min = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;
        if (dists[i] < min) {
            min = dists[i];
            idx = i;
        }
    }
    return idx;
}
