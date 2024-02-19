import Trie from "../../../src/07_trees/trie/Trie";

test("Trie", function () {
    const trie = new Trie();
    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");

    expect(trie.search("fool")).toEqual(true);
    expect(trie.search("foolish")).toEqual(true);
    expect(trie.search("foo")).toEqual(true);
    expect(trie.search("bar")).toEqual(true);

    expect(trie.startsWith("foo")).toEqual(true);
    expect(trie.startsWith("fooA")).toEqual(false);
    expect(trie.startsWith("ba")).toEqual(true);
    expect(trie.startsWith("bar")).toEqual(true);
    expect(trie.startsWith("b")).toEqual(true);
    expect(trie.startsWith("f")).toEqual(true);
    expect(trie.startsWith("t")).toEqual(false);
    expect(trie.startsWith("s")).toEqual(false);

    expect(trie.search("foo")).toEqual(true);
    expect(trie.search("fool")).toEqual(true);
    expect(trie.search("foolish")).toEqual(true);
    expect(trie.search("bar")).toEqual(true);
    expect(trie.search("ba")).toEqual(false);
    expect(trie.search("fo")).toEqual(false);
    expect(trie.search("f")).toEqual(false);
    expect(trie.search("b")).toEqual(false);

    expect(trie.delete("foo"));
    expect(trie.search("foo")).toEqual(false);
    expect(trie.startsWith("foo")).toEqual(true);

    expect(trie.delete("bar"));
    expect(trie.search("bar")).toEqual(false);
    expect(trie.startsWith("b")).toEqual(false);
    expect(trie.startsWith("bar")).toEqual(false);

    expect(trie.delete("fotarstsratao"));

    trie.insert("foo");
    trie.insert("fool");
    trie.insert("foolish");
    trie.insert("bar");

    expect(trie.find("fo").sort()).toEqual(["foo", "fool", "foolish"]);
    trie.delete("fool");
    expect(trie.find("fo").sort()).toEqual(["foo", "foolish"]);

    trie.insert("fool");
    trie.insert("fool");
    trie.insert("fool");
    trie.insert("fool");
    trie.delete("fool");
    expect(trie.search("fool")).toEqual(false);
});
