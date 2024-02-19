type Node<T> = {
    val: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.tail = undefined;
    }

    push(item: T): void {
        this.length++;
        const node: Node<T> = { val: item };

        node.prev = this.tail;
        this.tail = node;
    }

    pop(): T | void {
        if (!this.tail) {
            return;
        }

        this.length--;
        const node = this.tail;
        this.tail = this.tail.prev;

        return node.val;
    }

    peek(): T | undefined {
        return this.tail?.val;
    }
}
