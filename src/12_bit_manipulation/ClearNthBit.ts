export default function ClearNthBit(n: number, i: number) {
    return n & ~(1 << i);
}
