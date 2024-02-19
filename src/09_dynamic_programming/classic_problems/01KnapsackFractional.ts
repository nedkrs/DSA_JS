export default function KnapsackFractional(
    v: number[],
    w: number[],
    W: number,
) {
    let bestValue = v
        .map((v, idx) => ({ v, w: w[idx], sortBy: v / w[idx] }))
        .sort((a, b) => b.sortBy - a.sortBy);

    let res = [];
    let idx = 0;

    while (W > 0 && idx < bestValue.length) {
        let { v, w } = bestValue[idx];

        if (W - w >= 0) {
            W -= w;
            res.push({ v, w, f: 1 });
        } else {
            let f = W / w;
            W -= f * w;
            res.push({ v, w, f });
        }
        idx++;
    }

    return res;
}
