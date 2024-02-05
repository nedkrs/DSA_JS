export default function CutRod(p: number[], n: number): number {
    let r = new Array(p.length).fill(-Infinity);
    r[0] = 0;

    cut(p, n, r);

    return r[n];
}

function cut(p: number[], n: number, r: number[]): number {
    if (r[n] >= 0) return r[n];

    let q = -Infinity;
    for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + cut(p, n - i, r));
    }

    r[n] = q;

    return r[n];
}

// i  0  1  2  3   4   5   6   7   8   9  10   rod length
// p  0  1  5  8   9  10  17  17  20  24  30   price per length
// r  0  1  5  8  10  13  17  18  22  25  30   max revenue per length
