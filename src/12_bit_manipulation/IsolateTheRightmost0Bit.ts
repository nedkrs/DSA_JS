export default function IsolateTheRightmost0Bit(n: number) {
    return ~n & (n + 1);
}
