export default function ReverseBits(n: number) {
    let reverse = 0;
    let bits = 32;

    while (bits-- > 0) {
        let lsb = n & 1;
        n >>= 1;
        reverse <<= 1;
        reverse |= lsb;
    }

    return reverse >>> 0;
}
