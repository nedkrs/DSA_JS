export default function CheckIfANumberIsAPowerOfTwo(n: number) {
    return n > 0 && (n & (n - 1)) === 0;
}