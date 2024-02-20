export default function ComputeLogBase2(n: number) {
    let log2 = 0;

    while ((n >>= 1)) log2++;

    return log2;
}
