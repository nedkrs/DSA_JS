export default function FrogJumpBottomUp(
    S: number[],
    k: number,
    q: number,
): number {
    let jumps = new Array(k + 1).fill(0);
    jumps[0] = 1;

    for (let i = 1; i < jumps.length; i++) {
        let totalWays = 0;

        for (let j = 0; j < S.length; j++) {
            let jump = S[j];
            if (i - jump >= 0) {
                totalWays = (totalWays + jumps[i - jump]) % q;
            }
        }
        jumps[i] = totalWays;
    }

    return jumps[k];
}
