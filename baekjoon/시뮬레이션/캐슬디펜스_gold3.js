function solution(n, m, d, board) {
    function getCombination(arr, select = 3) {
        const result = [];
        const dfs = (start, path = []) => {
            if (path.length === select) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                dfs(i + 1, path);
                path.pop();
            }
        };
        dfs(0);
        return result;
    }
    function enemyExists(tmpBoard) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (tmpBoard[i][j] === 1) return true;
            }
        }
        return false;
    }
    function findEnemy(position, tmpBoard, distance) {
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [[n, position, 0]];
        const dx = [0, -1, 0];
        const dy = [-1, 0, 1];
        while (queue.length > 0) {
            const [cx, cy, dist] = queue.shift();
            if (dist > distance) continue;

            for (let i = 0; i < 3; i++) {
                const [nx, ny] = [cx + dx[i], cy + dy[i]];
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny]) continue;
                visited[nx][ny] = true;
                if (tmpBoard[nx][ny] === 1 && dist + 1 <= distance) {
                    return [nx, ny];
                }
                queue.push([nx, ny, dist + 1]);
            }
        }
        return null;
    }
    const archerPosition = getCombination([
        ...Array.from({ length: m }, (_, i) => i),
    ]);

    let maxKill = 0;

    for (let archerP of archerPosition) {
        const boardCopy = board.map((row) => [...row]);
        let killCount = 0;

        while (enemyExists(boardCopy)) {
            const deletedEnemy = new Set();

            for (const position of archerP) {
                const enemy = findEnemy(position, boardCopy, d);
                if (enemy) deletedEnemy.add(enemy.join(","));
            }
            for (const e of deletedEnemy) {
                const [x, y] = e.split(",").map(Number);
                boardCopy[x][y] = 0;
                killCount++;
            }

            boardCopy.pop();
            boardCopy.unshift(Array(m).fill(0));
        }
        maxKill = Math.max(maxKill, killCount);
    }
    return maxKill;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M, D] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, D, BOARD));
