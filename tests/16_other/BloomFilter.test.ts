import BloomFilter from "../../src/16_other/BloomFilter";

describe("PriorityIndexedMinQueue Tests", () => {
    test("returns false when empty", () => {
        let bf = new BloomFilter(100);

        expect(bf.contains("Ned")).toBe(false);
        expect(bf.contains("Rick")).toBe(false);
        expect(bf.contains("Jack")).toBe(false);
    });
    test("handles one item", () => {
        let bf = new BloomFilter(100);

        expect(bf.contains("Ned")).toBe(false);
        bf.add("Ned");
        expect(bf.contains("Ned")).toBe(true);
        expect(bf.contains("Rick")).toBe(false);
        expect(bf.contains("Jack")).toBe(false);
    });
    test("handles many items", () => {
        let bf = new BloomFilter(100);

        const names = [
            "Ned",
            "Jack",
            "Rick",
            "Aragorn",
            "Legolas",
            "Saruman",
            "Jessie",
            "Paige",
            "Ashley",
        ];
        names.forEach((item) => bf.add(item));
        names.forEach((item) => expect(bf.contains(item)).toBe(true));
        ["Samwise", "Frodo", "Gandalf", "Sauron"].forEach((item) =>
            expect(bf.contains(item)).toBe(false),
        );
    });
});
