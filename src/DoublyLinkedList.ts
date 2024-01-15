type Node<T> = {
    val: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    append(item: T): void {
        const node: Node<T> = { val: item };

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }

        this.length++;
    }
    prepend(item: T): void {
        const node: Node<T> = { val: item };

        if (this.head) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            this.head = this.tail = node;
        }

        this.length++;
    }
    insertAt(item: T, idx: number): void {
        const node: Node<T> = { val: item };
        const nodeAt = this.getNodeAt(idx);
        const nodePrev = nodeAt?.prev;

        node.next = nodeAt;
        node.prev = nodePrev;

        if (nodePrev) {
            nodePrev.next = node;
        }
        if (nodeAt) {
            nodeAt.prev = node;
        }

        if (!this.head) {
            this.head = this.tail = node;
        }
        if (!nodeAt?.prev) {
            this.head = node;
        }

        this.length++;
    }
    removeAt(idx: number): T | undefined {
        const nodeAt = this.getNodeAt(idx);

        if (!nodeAt) {
            return undefined;
        }

        this.removeNode(nodeAt);

        return nodeAt.val;
    }
    remove(item: T): T | undefined {
        const idx = this.getIdxForVal(item);

        if (idx === undefined) {
            return undefined;
        }

        return this.removeAt(idx);
    }
    get(idx: number): T | undefined {
        return this.getNodeAt(idx)?.val;
    }
    private getIdxForVal(item: T): number | undefined {
        let curr = this.head;
        let i = 0;

        while (curr) {
            if (curr.val === item) {
                return i;
            }
            curr = curr.next;
            i++;
        }

        return undefined;
    }
    private removeNode(node: Node<T>): void {
        let prev = node.prev;
        let next = node.next;
        this.length--;

        if (prev) {
            prev.next = node.next;
        }
        if (next) {
            next.prev = node.prev;
        }
        if (!prev && !next) {
            this.head = this.tail = undefined;
            return;
        }
        if (!prev && next) {
            this.head = next;
        }
        if (prev && !next) {
            this.tail = prev;
        }
    }
    private getNodeAt(idx: number): Node<T> | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
