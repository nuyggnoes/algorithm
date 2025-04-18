function solution(n, m, board) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let maxSafeZone = 0;
    function spreadVirus(tmpBoard) {
        const queue = [];
        let safeZone = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (tmpBoard[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }
        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [cx + dx[i], cy + dy[i]];
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (tmpBoard[nx][ny] === 0) {
                    tmpBoard[nx][ny] = 2;
                    queue.push([nx, ny]);
                }
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (tmpBoard[i][j] === 0) safeZone++;
            }
        }
        return safeZone;
    }
    function buildWall(depth) {
        if (depth === 3) {
            const copyBoard = board.map((row) => [...row]);
            const safeZone = spreadVirus(copyBoard);
            maxSafeZone = Math.max(maxSafeZone, safeZone);
            return;
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 0) {
                    board[i][j] = 1;
                    buildWall(depth + 1);
                    board[i][j] = 0;
                }
            }
        }
    }
    buildWall(0);
    return maxSafeZone;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, BOARD));
