function solution(n, l, board) {
    let answer = 0;
    function search(arr) {
        const visited = Array(arr.length).fill(false);

        for (let i = 0; i < arr.length - 1; i++) {
            const diff = arr[i] - arr[i + 1];

            if (diff === 0) continue;
            if (Math.abs(diff) > 1) return false;

            if (diff === 1) {
                for (let ch = i + 1; ch <= i + l; ch++) {
                    if (ch >= n || arr[ch] !== arr[i + 1] || visited[ch])
                        return false;
                    visited[ch] = true;
                }
            }

            if (diff === -1) {
                for (let ch = i; ch > i - l; ch--) {
                    if (ch < 0 || arr[ch] !== arr[i] || visited[ch])
                        return false;
                    visited[ch] = true;
                }
            }
        }
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (search(board[i])) answer++;
    }

    for (let i = 0; i < n; i++) {
        const col = board.map((row) => row[i]);
        if (search(col)) answer++;
    }
    return answer;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, L] = input.shift().split(" ").map(Number);
const BOARD = input.map((row) => row.split(" ").map(Number));
console.log(solution(N, L, BOARD));
