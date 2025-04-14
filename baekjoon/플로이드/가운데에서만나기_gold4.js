function solution(n, m, info, k, cities) {
    const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    const next = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    info.forEach(([from, to, time]) => {
        board[from][to] = Math.min(board[from][to], time);
        next[from][to] = to;
    });

    for (let i = 1; i <= n; i++) board[i][i] = 0;
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (board[i][j] > board[i][k] + board[k][j]) {
                    board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
                    next[i][j] = next[i][k];
                }
            }
        }
    }
    let minCity = [];
    let minCost = Infinity;
    for (let i = 1; i <= n; i++) {
        let maxRoundTrip = 0;
        for (const city of cities) {
            const go = board[city][i];
            const back = board[i][city];
            if (go === Infinity || back === Infinity) {
                maxRoundTrip = Infinity;
                break;
            }
            maxRoundTrip = Math.max(maxRoundTrip, go + back);
        }

        if (maxRoundTrip < minCost) {
            minCost = maxRoundTrip;
            minCity = [i];
        } else if (maxRoundTrip === minCost) {
            minCity.push(i);
        }
    }

    return minCity.join(" ");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const INFO = input.splice(0, M).map((e) => e.split(" ").map(Number));
const K = Number(input.shift());
const CITY = input.shift().split(" ").map(Number);
console.log(solution(N, M, INFO, K, CITY));
