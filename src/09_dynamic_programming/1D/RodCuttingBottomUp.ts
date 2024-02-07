export default function RodCuttingBottomUp(p: number[], n: number): number {
    let r = [0];

    for (let i = 1; i <= n; i++) {
        let q = -Infinity;
        for (let j = 1; j <= i; j++) {
            q = Math.max(q, p[j] + r[i - j]);
        }
        r[i] = q;
    }
    return r[n];
}

// i  0  1  2  3   4   5   6   7   8   9  10   rod length
// p  0  1  5  8   9  10  17  17  20  24  30   price per length
// r  0  1  5  8  10  13  17  18  22  25  30   max revenue per length
