export default function SwapNumbers(x: number, y: number) {
    x = x ^ y;
    y = y ^ x;
    x = x ^ y;
    return [x, y];
}
