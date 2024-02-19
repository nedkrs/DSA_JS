export default function LongestCommonSubsequenceDP(
    X: string,
    Y: string,
): string {
    let c = new Array(X.length + 1);
    let b = new Array(X.length + 1);

    for (let idx = 0; idx < c.length; idx++) {
        c[idx] = new Array(Y.length + 1).fill(0);
        b[idx] = new Array(Y.length + 1).fill(0);
    }

    for (let i = 1; i <= X.length; i++) {
        for (let j = 1; j <= Y.length; j++) {
            if (X[i - 1] === Y[j - 1]) {
                c[i][j] = c[i - 1][j - 1] + 1;
                b[i][j] = "\\";
            } else if (c[i - 1][j] >= c[i][j - 1]) {
                c[i][j] = c[i - 1][j];
                b[i][j] = "|";
            } else {
                c[i][j] = c[i][j - 1];
                b[i][j] = "--";
            }
        }
    }

    return getLCS(b, X.length, Y.length, X);
}

function getLCS(
    b: (number | string)[][],
    i: number,
    j: number,
    X: string,
): string {
    let lcs: string[] = [];

    while (b[i][j] !== 0) {
        if (b[i][j] === "\\") {
            lcs.push(X[i - 1]);
            i--;
            j--;
        } else if (b[i][j] === "|") {
            i--;
        } else if (b[i][j] === "--") {
            j--;
        }
    }

    return lcs.reverse().join("");
}
