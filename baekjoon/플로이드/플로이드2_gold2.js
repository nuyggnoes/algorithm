function solution(n, m, info) {
    const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    const next = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    for (let i = 1; i <= n; i++) {
        board[i][i] = 0;
    }
    info.forEach(([from, to, cost]) => {
        board[from][to] = Math.min(board[from][to], cost);
        next[from][to] = to;
    });

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (board[i][k] + board[k][j] < board[i][j]) {
                    board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
                    next[i][j] = next[i][k];
                }
            }
        }
    }
    const answer = [];
    const result = board.slice(1).map((e) => {
        const [inf, ...element] = e;
        return element.map((v) => (v === Infinity ? 0 : v)).join(" ");
    });
    answer.push(...result);
    const findPath = (from, to, path = `${from}`, depth = 2) => {
        if (from === to || next[from][to] === Infinity) {
            answer.push("0");
            return;
        }
        if (to === next[from][to]) {
            path = path + " " + to;
            answer.push(`${depth} ${path}`);
            return;
        }
        return findPath(next[from][to], to, path + " " + next[from][to], depth + 1);
    };
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            findPath(i, j);
        }
    }
    console.log(answer);
    return answer.join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, INFO));
