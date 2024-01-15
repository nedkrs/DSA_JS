type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { val: item };
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    append(item: T): void {
        const node: Node<T> = { val: item };
        const tail = this.getNodeAt(this.length - 1);

        if (tail) {
            tail.next = node;
        } else {
            this.head = node;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        const node: Node<T> = { val: item };
        const nodePrev = this.getNodeAt(idx - 1);
        const nodeAt = this.getNodeAt(idx);

        if (!nodePrev) {
            node.next = nodeAt;
            this.head = node;
        } else {
            node.next = nodePrev.next;
            nodePrev.next = node;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        const idx = this.getIdxForVal(item);

        if (idx === undefined) {
            return undefined;
        }

        return this.removeAt(idx);
    }

    removeAt(idx: number): T | undefined {
        const nodePrev = this.getNodeAt(idx - 1);
        const nodeAt = this.getNodeAt(idx);

        if (!nodeAt) {
            return undefined;
        }
        if (!nodePrev) {
            this.head = this.head?.next;
        } else {
            nodePrev.next = nodeAt?.next;
        }

        this.length--;

        return nodeAt.val;
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
    private getNodeAt(idx: number): Node<T> | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
