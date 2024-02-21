// find two non-repeating elements in an array where every other element repeats

export default function NonRepeatingNumbers(arr: number[]) {
    let xor = 0;

    for (let i = 0; i < arr.length; i++) {
        xor ^= arr[i];
    }

    let lsb = xor & ~(xor - 1);
    let x = 0;
    let y = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] & lsb) x ^= arr[i];
        else y ^= arr[i];
    }

    return [x, y];
}
