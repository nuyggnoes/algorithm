function solution(maps) {
    const board = maps.map((e) => e.split(""));
    const n = board.length;
    const m = board[0].length;
    let start, end, lever;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "S") start = [i, j];
            else if (board[i][j] === "L") lever = [i, j];
            else if (board[i][j] === "E") end = [i, j];
        }
    }
    const bfs = (start, target) => {
        console.log(start);
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [[...start, 0]];
        const dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        visited[start[0]][start[1]] = true;

        while (queue.length) {
            const [x, y, dist] = queue.shift();
            if (board[x][y] === target) return dist;

            for (const [dx, dy] of dir) {
                const nx = x + dx,
                    ny = y + dy;
                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < m &&
                    !visited[nx][ny] &&
                    board[nx][ny] !== "X"
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
        return -1;
    };

    const toLever = bfs(start, "L");
    if (toLever === -1) return -1;

    const toEnd = bfs(lever, "E");
    if (toEnd === -1) return -1;

    return toLever + toEnd;
}

const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
console.log(solution(maps));
