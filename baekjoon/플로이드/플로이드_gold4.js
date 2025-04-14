function solution(n, m, info) {
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
    const result = board.slice(1).map((e) => {
        const [inf, ...element] = e;
        return element.map((v) => (v === Infinity ? 0 : v)).join(" ");
    });
    return result.join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, INFO));
