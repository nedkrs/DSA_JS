import PriorityIndexedMinQueue from "./PriorityIndexedMinQueue";

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    let dists = new Array(arr.length).fill(Infinity);
    let prev = new Array(arr.length).fill(-1);
    let unseen = new PriorityIndexedMinQueue();
    unseen.insert(0, 0);
    dists[0] = 0;

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
