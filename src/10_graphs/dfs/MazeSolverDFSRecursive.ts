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
    const path: Point[] = [];
    const seen: boolean[][] = new Array(maze.length);
    maze.forEach((_, idx) => {
        seen[idx] = new Array(maze[0].length);
    });

    walk(maze, wall, start, end, path, seen);
    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
): boolean {
    if (curr.x < 0 || curr.x >= maze[0].length) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (seen[curr.y][curr.x] === true) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    if (end.x === curr.x && end.y === curr.y) {
        return true;
    }

    for (let i = 0; i < dir.length; i++) {
        let next = { y: curr.y + dir[i][0], x: curr.x + dir[i][1] };
        if (walk(maze, wall, next, end, path, seen)) {
            return true;
        }
    }

    path.pop();

    return false;
}
