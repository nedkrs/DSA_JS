export default function TurnOnTheRightmost0Bit(n: number) {
    return n | (n + 1);
}
