export default function CheckIfEvenOrOdd(n: number): string {
    return (n & 1) === 1 ? "odd" : "even";
}
