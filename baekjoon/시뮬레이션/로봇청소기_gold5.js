function solution(n, m, r, c, d, board) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let currentDirection = d;
    let cleaningCount = 0;
    const bfs = (r, c) => {
        const queue = [[r, c]];
        board[r][c] = "#";
        cleaningCount++;
        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            for (let i = 3; i >= 0; i--) {
                const [nx, ny] = [
                    cx + dx[(i + currentDirection) % 4],
                    cy + dy[(i + currentDirection) % 4],
                ];
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (board[nx][ny] === 0) {
                    currentDirection = (i + currentDirection) % 4;
                    board[nx][ny] = "#";
                    cleaningCount++;
                    queue.push([nx, ny]);
                    break;
                }
            }
            if (queue.length === 0) {
                const [backX, backY] = [
                    cx - dx[currentDirection],
                    cy - dy[currentDirection],
                ];
                if (board[backX][backY] === 1) break;
                else queue.push([backX, backY]);
            }
        }
    };
    bfs(r, c);
    return cleaningCount;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const [R, C, D] = input.shift().split(" ").map(Number);
const BOARD = input.map((row) => row.split(" ").map(Number));
console.log(solution(N, M, R, C, D, BOARD));
