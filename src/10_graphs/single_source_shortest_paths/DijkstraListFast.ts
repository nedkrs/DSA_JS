import PriorityIndexedMinQueue from "../../08_heaps/priority_indexed_min_heap/PriorityIndexedMinQueue";

export default function dijkstra_list(
    arr: WeightedAdjacencyList,
    source: number,
    sink?: number,
) {
    let dists = new Array(arr.length).fill(Infinity);
    let prev = new Array(arr.length).fill(-1);
    let unseen = new PriorityIndexedMinQueue();
    unseen.insert(source, 0);
    dists[source] = 0;

    while (!unseen.isEmpty()) {
        let curr = unseen.deleteMinimum();
        let adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            let next = adjs[i];
            let distToNext = dists[curr] + next.weight;
            if (distToNext < dists[next.to]) {
                dists[next.to] = distToNext;
                prev[next.to] = curr;
                if (unseen.contains(next.to)) {
                    unseen.decreaseKey(next.to, distToNext);
                } else {
                    unseen.insert(next.to, distToNext);
                }
            }
        }
    }

    if (sink === undefined) return { path: [], dists };

    if (prev[sink] === -1) {
        return { path: [], dists };
    }

    let curr = sink;
    let path = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }

    return { path: [source, ...path.reverse()], dists };
}
