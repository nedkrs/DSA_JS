export type Point = {
    x: number;
    y: number;
};

let dir = [
    [0, -1], // left
    [1, 0], // down
    [0, 1], // right
    [-1, 0], // up
];

export default function maze_solver(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen: boolean[][] = new Array(maze.length);
    let prev: (number | Point)[][] = new Array(maze.length);

    for (let i = 0; i < maze.length; i++) {
        seen[i] = new Array(maze[0]?.length).fill(false);
        prev[i] = new Array(maze[0]?.length).fill(-1);
    }

    seen[start.y][start.x] = true;
    let queue: Point[] = [start];

    while (queue.length > 0) {
        let curr = queue.shift() as Point;

        if (end.x === curr.x && end.y === curr.y) {
            break;
        }

        for (let i = 0; i < dir.length; i++) {
            let next = { x: curr.x + dir[i][1], y: curr.y + dir[i][0] };
            if (
                next.x < maze[0].length &&
                next.x >= 0 &&
                next.y < maze.length &&
                next.y >= 0 &&
                maze[next.y][next.x] !== wall &&
                !seen[next.y][next.x]
            ) {
                prev[next.y][next.x] = { x: curr.x, y: curr.y };
                seen[next.y][next.x] = true;
                queue.push(next);
            }
        }
    }

    if (prev[end.y][end.x] === -1) {
        return [];
    }

    let path = [];
    let curr = end;
    while (prev[curr.y][curr.x] !== -1) {
        path.push(curr);
        curr = prev[curr.y][curr.x] as Point;
    }

    return [start, ...path.reverse()];
}
