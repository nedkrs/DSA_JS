type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node: Node<T> = { val: item };
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | void {
        if (!this.head) {
            return;
        }

        this.length--;
        const node: Node<T> = this.head;

        if (this.length === 0) {
            this.head = this.tail = undefined;
        } else {
            this.head = this.head.next;
        }

        return node.val;
    }

    peek(): T | undefined {
        return this.head?.val;
    }
}
