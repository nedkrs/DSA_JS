const XXH = require("xxhashjs");

export default class BloomFilter {
    private data: number[];

    constructor(size: number) {
        this.data = new Array(size).fill(0);
    }

    add(s: string): void {
        const [idx1, idx2, idx3] = this.hash(s);
        this.data[idx1] = 1;
        this.data[idx2] = 1;
        this.data[idx3] = 1;
    }

    contains(s: string): boolean {
        const [idx1, idx2, idx3] = this.hash(s);

        return (
            this.data[idx1] === 1 &&
            this.data[idx2] === 1 &&
            this.data[idx3] === 1
        );
    }

    private hash(s: string): number[] {
        const SEED_1 = 10;
        const SEED_2 = 20;
        const SEED_3 = 30;

        const buffer = Buffer.from(s);

        const h1 = XXH.h32(SEED_1).update(buffer).digest() % this.data.length;
        const h2 = XXH.h32(SEED_2).update(buffer).digest() % this.data.length;
        const h3 = XXH.h32(SEED_3).update(buffer).digest() % this.data.length;

        return [h1, h2, h3];
    }
}
