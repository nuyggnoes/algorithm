function solution(n, m, board) {
    let count = 0;
    let maxWidth = 0;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const bfs = (x, y) => {
        const queue = [];
        let count = 1;
        queue.push([x, y]);
        board[x][y] = 0;
        while (queue.length > 0) {
            const [currentX, currentY] = queue.shift();
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [currentX + dx[i], currentY + dy[i]];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (board[nx][ny] === 0) continue;
                queue.push([nx, ny]);
                board[nx][ny] = 0;
                count++;
            }
        }
        return count;
    };
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j]) {
                const width = bfs(i, j);
                maxWidth = Math.max(width, maxWidth);
                if (width !== 0) count++;
            }
        }
    }
    return [count, maxWidth];
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, BOARD).join("\n"));
