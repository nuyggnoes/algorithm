function solution(n) {
    let answer = 0;
    const board = new Array(n).fill(0);
    const dfs = (row) => {
        if (row === n) {
            answer++;
            return;
        }
        for (let col = 0; col < n; col++) {
            board[row] = col;
            if (isValid(row)) dfs(row + 1);
        }
    };
    const isValid = (row) => {
        for (let i = 0; i < row; i++) {
            if (board[i] === board[row]) return false;
            if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
        }
        return true;
    };

    dfs(0);
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(solution(N));
