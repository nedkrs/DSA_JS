export default function RodCuttingExponential(p: number[], n: number): number {
    if (n === 0) {
        return 0;
    }

    let q = -Infinity;

    for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + RodCuttingExponential(p, n - i));
    }

    return q;
}

// i  0  1  2  3   4   5   6   7   8   9  10   rod length
// p  0  1  5  8   9  10  17  17  20  24  30   price per length
// r  0  1  5  8  10  13  17  18  22  25  30   max revenue per length
