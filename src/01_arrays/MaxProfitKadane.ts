export default function max_profit_kadane(A: number[]): number {
    if (A.length <= 1) return 0;

    let maxProfit = 0;
    let maxEndingHere = 0;

    for (let i = 1; i < A.length; i++) {
        let diff = A[i] - A[i - 1];
        maxEndingHere = Math.max(0, maxEndingHere + diff);
        maxProfit = Math.max(maxProfit, maxEndingHere);
    }

    if (maxProfit < 0) return 0;

    return maxProfit;
}
