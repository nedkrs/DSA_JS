import LeastRecentlyUsedCache from "../src/LeastRecentlyUsedCache";

test("LeastRecentlyUsedCache", function () {
    const lru = new LeastRecentlyUsedCache<string, number>(3) as ILRU<
        string,
        number
    >;

    expect(lru.get("foo")).toEqual(undefined);
    lru.update("foo", 69);
    expect(lru.get("foo")).toEqual(69);

    lru.update("bar", 420);
    expect(lru.get("bar")).toEqual(420);

    lru.update("baz", 1337);
    expect(lru.get("baz")).toEqual(1337);

    lru.update("ball", 69420);

    expect(lru.get("ball")).toEqual(69420);
    expect(lru.get("foo")).toEqual(undefined);
    expect(lru.get("bar")).toEqual(420);

    // lru.print();

    expect(lru.get("bar")).toEqual(420);
    expect(lru.get("foo")).toEqual(undefined);

    expect(lru.get("baz")).toEqual(1337);
    expect(lru.get("ball")).toEqual(69420);
});
