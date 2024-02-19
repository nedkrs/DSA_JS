export default class FenwickTree {
    private data: number[];

    constructor(arr: number[]) {
        this.data = [0, ...arr];
        this.constructLinear();
    }

    private constructLinear() {
        for (let i = 1; i < this.data.length; i++) {
            let lsb = this.LSB(i);

            if (lsb + i >= this.data.length) continue;
            this.data[i + lsb] = this.data[i] + this.data[i + lsb];
        }
    }

    display(): number[] {
        return this.data.map((it) => it);
    }

    rangeSum(i: number, j: number): number {
        return this.prefixSum(j) - this.prefixSum(i - 1);
    }

    pointUpdate(i: number, val: number): void {
        while (i < this.data.length) {
            this.data[i] = this.data[i] + val;
            i += this.LSB(i);
        }
    }

    private prefixSum(i: number): number {
        let sum = 0;

        while (i > 0) {
            sum += this.data[i];
            i -= this.LSB(i);
        }

        return sum;
    }

    private LSB(i: number): number {
        return i & -i;
    }
}
