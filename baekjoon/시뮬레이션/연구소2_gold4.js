function solution(n, m, board) {
    let minTime = Number.MAX_SAFE_INTEGER;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const virusZone = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 2) {
                virusZone.push([i, j]);
            }
        }
    }

    function bfs(activeVirus) {
        const queue = [...activeVirus];
        const tmpBoard = board.map((row) => row.map((e) => (e === 1 ? -1 : 0)));
        const visited = Array.from({ length: n }, () => Array(n).fill(false));

        for (const [x, y] of activeVirus) {
            visited[x][y] = true;
        }

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            for (let d = 0; d < 4; d++) {
                const nx = cx + dx[d];
                const ny = cy + dy[d];
                if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if (visited[nx][ny]) continue;
                if (tmpBoard[nx][ny] === -1) continue;
                visited[nx][ny] = true;
                tmpBoard[nx][ny] = tmpBoard[cx][cy] + 1;
                queue.push([nx, ny]);
            }
        }
        let maxTime = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (tmpBoard[i][j] === 0 && !visited[i][j]) {
                    return Number.MAX_SAFE_INTEGER;
                }
                if (visited[i][j] && board[i][j] !== 1) {
                    maxTime = Math.max(maxTime, tmpBoard[i][j]);
                }
            }
        }

        return maxTime;
    }

    const visited = Array(virusZone.length).fill(false);

    function putVirus(depth, start, virus = []) {
        if (depth === m) {
            const time = bfs(virus);
            minTime = Math.min(minTime, time);
            return;
        }
        for (let i = start; i < virusZone.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                virus.push(virusZone[i]);
                putVirus(depth + 1, i + 1, virus);
                visited[i] = false;
                virus.pop();
            }
        }
    }

    putVirus(0, 0);

    return minTime === Number.MAX_SAFE_INTEGER ? -1 : minTime;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, BOARD));
