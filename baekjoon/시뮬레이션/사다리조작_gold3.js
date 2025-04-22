function solution(n, m, h, line) {
    const board = Array.from({ length: h + 1 }, () => Array(n + 1).fill(false));
    line.forEach(([a, b]) => {
        board[a][b] = true;
    });

    let answer = Infinity;
    function isValid(board) {
        for (let start = 1; start <= n; start++) {
            let cur = start;
            for (let r = 1; r <= h; r++) {
                if (board[r][cur]) cur++;
                else if (board[r][cur - 1]) cur--;
            }
            if (cur !== start) return false;
        }
        return true;
    }
    function dfs(tmpBoard, startRow, depth, max) {
        if (depth === max) {
            if (isValid(tmpBoard)) answer = max;
            return;
        }
        for (let i = startRow; i <= h; i++) {
            for (let j = 1; j < n; j++) {
                if (tmpBoard[i][j] || tmpBoard[i][j - 1] || tmpBoard[i][j + 1])
                    continue;
                tmpBoard[i][j] = true;
                dfs(tmpBoard, i, depth + 1, max);
                tmpBoard[i][j] = false;
            }
        }
    }
    for (let max = 0; max <= 3; max++) {
        dfs(board, 1, 0, max);
        if (answer !== Infinity) break;
    }
    return answer === Infinity ? -1 : answer;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M, H] = input.shift().split(" ").map(Number);
const LINE = input.splice(0, M).map((e) => e.split(" ").map(Number));
console.log(solution(N, M, H, LINE));
