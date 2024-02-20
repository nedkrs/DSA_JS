export default function FindTheRightmost1Bit(n: number) {
    return n & -n;
}
