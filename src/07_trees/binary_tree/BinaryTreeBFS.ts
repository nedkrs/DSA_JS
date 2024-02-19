export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q = [head];

    while (q.length > 0) {
        let curr = q.shift() as BinaryNode<number>;

        if (curr.value === needle) {
            return true;
        }

        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}
