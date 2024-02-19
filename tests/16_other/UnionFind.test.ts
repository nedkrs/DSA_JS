import UnionFind from "../../src/16_other/UnionFind";

test("union_find", function () {
    const uf = new UnionFind(10); // Create a Union-Find with 10 elements

    // Initially, each element should be its own representative
    for (let i = 0; i < 10; i++) {
        expect(uf.find(i)).toBe(i);
    }

    // Perform some union operations
    uf.union(1, 2);
    uf.union(2, 3);
    uf.union(4, 5);
    uf.union(5, 6);

    // Check if the elements are in the same set
    expect(uf.isConnected(1, 3)).toBeTruthy(); // 1, 2, 3 should be connected
    expect(uf.isConnected(4, 6)).toBeTruthy(); // 4, 5, 6 should be connected
    expect(uf.isConnected(1, 4)).toBeFalsy(); // 1 and 4 are not connected
    expect(uf.isConnected(2, 5)).toBeFalsy(); // 2 and 5 are not connected

    // Check representatives
    const rep1 = uf.find(1);
    expect(uf.find(2)).toBe(rep1);
    expect(uf.find(3)).toBe(rep1);

    const rep4 = uf.find(4);
    expect(uf.find(5)).toBe(rep4);
    expect(uf.find(6)).toBe(rep4);
});
