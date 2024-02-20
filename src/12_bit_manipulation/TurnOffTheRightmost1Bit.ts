export default function TurnOffTheRightmost1Bit(n: number) {
    return n & (n - 1);
}
