/* 
    queue.shift() 방식을 주로 사용했는데 그럴 경우 시간 초과 발생
    index를 활용
*/
function solution(n, m, board) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [];

    let flag = true;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) queue.push([i, j]);
            if (board[i][j] === 0) flag = false;
        }
    }
    if (flag) return 0;
    let index = 0;
    while (index < queue.length) {
        const [currentX, currentY] = queue[index++];
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [currentX + dx[i], currentY + dy[i]];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (board[nx][ny] !== 0) continue;
            board[nx][ny] = board[currentX][currentY] + 1;
            queue.push([nx, ny]);
        }
    }

    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) return -1;
            result = Math.max(result, board[i][j]);
        }
    }
    return result - 1;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, BOARD));
