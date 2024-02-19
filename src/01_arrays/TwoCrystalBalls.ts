export default function two_crystal_balls(breaks: boolean[]): number {
    let jump = Math.sqrt(breaks.length);
    let i = jump;

    for (i; i < breaks.length; i = i + jump) {
        if (breaks[i]) {
            break;
        }
    }

    i = i - jump;

    for (let j = 0; i < breaks.length && j < jump; i++, j++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
