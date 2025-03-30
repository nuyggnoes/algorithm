const WHITE_BOARD = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
const BLACK_BOARD = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];

function solution(n, m, board) {
    let answer = Number.MAX_SAFE_INTEGER;
    function whiteChecker(arr) {
        let count = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (arr[i][j] !== WHITE_BOARD[i][j]) count++;
            }
        }
        return count;
    }
    function blackChecker(arr) {
        let count = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (arr[i][j] !== BLACK_BOARD[i][j]) count++;
            }
        }
        return count;
    }
    for (let i = 0; i < n - 7; i++) {
        for (let j = 0; j < m - 7; j++) {
            let sliceBoard = [];
            for (let k = 0; k < 8; k++) {
                sliceBoard.push(board[i + k].slice(j, j + 8));
            }
            const whiteResult = whiteChecker(sliceBoard);
            const blackResult = blackChecker(sliceBoard);
            answer = Math.min(answer, whiteResult, blackResult);
        }
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ");
const BOARD = input;
console.log(solution(N, M, BOARD));
