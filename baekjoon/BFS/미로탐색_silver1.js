/*
    board를 직접 수정하는 방식을 사용했지만 실무적/확장성 관점에서는
    거리 배열을 따로 만드는 것이 더 좋은 것 같음.(원본 보존)
 */
function solution(n, m, board) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const bfs = (x, y, depth) => {
        const queue = [[x, y, depth]];
        board[x][y] = 0;
        while (queue.length > 0) {
            const [currentX, currentY, d] = queue.shift();
            if (currentX === n - 1 && currentY === m - 1) return d;
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [currentX + dx[i], currentY + dy[i]];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (board[nx][ny] === 0) continue;
                queue.push([nx, ny, d + 1]);

                board[nx][ny] = 0;
            }
        }
    };
    const answer = bfs(0, 0, 1);
    return answer;
}

// 수정 버전
function fixedSolution(n, m, board) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const dist = Array.from({ length: n }, () => Array(m).fill(0));
    const bfs = (x, y) => {
        const queue = [[x, y]];
        dist[x][y] = 1;
        while (queue.length > 0) {
            const [currentX, currentY] = queue.shift();
            if (currentX === n - 1 && currentY === m - 1) return dist[currentX][currentY];
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [currentX + dx[i], currentY + dy[i]];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (dist[nx][ny] > 0 || board[nx][ny] !== 1) continue;
                dist[nx][ny] = dist[currentX][currentY] + 1;
                queue.push([nx, ny]);
            }
        }
    };
    return bfs(0, 0);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split("").map(Number));
// console.log(solution(N, M, BOARD));
console.log(fixedSolution(N, M, BOARD));
