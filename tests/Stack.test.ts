import Stack from "../src/Stack";

test("stack", function () {
    const list = new Stack<number>();
    list.push(1);
    list.push(8);
    list.push(10);
    expect(list.pop()).toEqual(10);
    expect(list.length).toEqual(2);
    list.push(15);
    expect(list.pop()).toEqual(15);
    expect(list.pop()).toEqual(8);
    expect(list.peek()).toEqual(1);
    expect(list.pop()).toEqual(1);
    expect(list.pop()).toEqual(undefined);
    list.push(42);
    expect(list.peek()).toEqual(42);
    expect(list.length).toEqual(1);
});
