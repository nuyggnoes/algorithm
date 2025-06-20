function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const map = board.map((row) => row.split(""));
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let start, goal;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (map[i][j] === "R") start = [i, j];
            if (map[i][j] === "G") goal = [i, j];
        }
    }
    const queue = [[...start, 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length) {
        const [x, y, count] = queue.shift();
        if (x === goal[0] && y === goal[1]) return count;

        for (let dir = 0; dir < 4; dir++) {
            let nx = x;
            let ny = y;

            while (
                nx + dx[dir] >= 0 &&
                nx + dx[dir] < n &&
                ny + dy[dir] >= 0 &&
                ny + dy[dir] < m &&
                map[nx + dx[dir]][ny + dy[dir]] !== "D"
            ) {
                nx += dx[dir];
                ny += dy[dir];
            }
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
    return -1;
}
const board = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."];
console.log(solution(board));
