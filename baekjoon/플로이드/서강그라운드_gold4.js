function solution(n, m, r, info, edges) {
    const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    let maxItemCount = 0;
    edges.forEach(([from, to, cost]) => {
        board[from][to] = Math.min(board[from][to], cost);
        board[to][from] = Math.min(board[to][from], cost);
    });
    for (let i = 1; i <= n; i++) board[i][i] = 0;
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (board[i][j] > board[i][k] + board[k][j]) {
                    board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
                }
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        let itemCount = 0;
        for (let j = 1; j <= n; j++) {
            if (board[i][j] <= m) itemCount += info[j - 1];
        }
        maxItemCount = Math.max(itemCount, maxItemCount);
    }
    return maxItemCount;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);
const INFO = input.shift().split(" ").map(Number);
const EDGES = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, R, INFO, EDGES));
