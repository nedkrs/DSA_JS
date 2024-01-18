export default class FenwickTree {
    private data: number[];

    constructor(arr: number[]) {
        this.data = [0, ...arr];
        this.constructLinear();
    }

    private constructLinear() {
        for (let i = 1; i < this.data.length; i++) {
            let lbs = this.LBS(i);

            if (lbs + i >= this.data.length) continue;
            this.data[i + lbs] = this.data[i] + this.data[i + lbs];
        }
    }

    display(): number[] {
        return this.data.map((it) => it);
    }

    rangeSum(i: number, j: number): number {
        return this.prefixSum(j) - this.prefixSum(i - 1);
    }

    pointUpdate(i: number, val: number): void {
        for (; i < this.data.length; ) {
            let lbs = this.LBS(i);
            this.data[i] = this.data[i] + val;
            i += lbs;
        }
    }

    private prefixSum(i: number): number {
        let sum = 0;

        for (; i > 0; ) {
            let lbs = this.LBS(i);
            sum += this.data[i];
            i -= lbs;
        }

        return sum;
    }

    private LBS(i: number): number {
        return i & -i;
    }
}
