import Queue from "../../src/04_queue/Queue";

test("queue", function () {
    const list = new Queue<number>();
    list.enqueue(13);
    list.enqueue(1);
    list.enqueue(21);
    expect(list.deque()).toEqual(13);
    list.enqueue(3);
    expect(list.length).toEqual(3);
    expect(list.deque()).toEqual(1);
    expect(list.deque()).toEqual(21);
    expect(list.peek()).toEqual(3);
    expect(list.deque()).toEqual(3);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);
    list.enqueue(42);
    expect(list.peek()).toEqual(42);
    expect(list.length).toEqual(1);
});
