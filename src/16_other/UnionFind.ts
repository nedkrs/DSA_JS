export default class UnionFind {
    private parent: number[];
    private rank: number[];

    constructor(size: number) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    find(x: number): number {
        if (x === this.parent[x]) {
            return x;
        }

        let p = this.find(this.parent[x]);
        this.parent[x] = p;
        return p;
    }

    union(x: number, y: number): void {
        if (this.isConnected(x, y)) return;

        let rootX = this.find(x);
        let rootY = this.find(y);

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootY] > this.rank[rootX]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootX] = rootY;
            this.rank[rootY] = this.rank[rootY] + 1;
        }
    }

    isConnected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }
}
