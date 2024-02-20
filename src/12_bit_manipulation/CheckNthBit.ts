export default function CheckNthBit(n: number, i: number) {
    return (n & (1 << i)) !== 0;
}
