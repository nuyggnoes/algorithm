// 문제에서 N <= 1000 이므로 시간초과
function solution(n, m, x, info) {
    const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    for (let i = 1; i <= n; i++) {
        board[i][i] = 0;
    }
    info.forEach(([from, to, cost]) => {
        board[from][to] = Math.min(board[from][to], cost);
    });
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
            }
        }
    }

    const answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(board[i][x] + board[x][i]);
    }

    return Math.max(...answer);
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M, X] = input.shift().split(" ").map(Number);
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, X, INFO));
