function solution(r, c, k, board) {
    r--;
    c--;
    let time = 0;
    let rowSize = 3;
    let colSize = 3;
    while (time <= 100) {
        if (board[r] && board[r][c] === k) {
            return time;
        }
        if (rowSize >= colSize) {
            let newBoard = [];
            let maxRowSize = 0;
            for (let i = 0; i < rowSize; i++) {
                let newRow = [];
                const map = new Map();
                for (let j = 0; j < colSize; j++) {
                    if (board[i][j] === 0) continue;
                    map.set(board[i][j], (map.get(board[i][j]) || 0) + 1);
                }
                const arr = [...map.entries()];
                arr.sort((a, b) => {
                    if (a[1] === b[1]) return a[0] - b[0];
                    return a[1] - b[1];
                });
                for (const [num, count] of arr) {
                    newRow.push(num, count);
                }
                if (newRow.length > 100) {
                    newRow = newRow.slice(0, 100);
                }
                maxRowSize = Math.max(maxRowSize, newRow.length);
                newBoard.push(newRow);
            }
            for (const row of newBoard) {
                while (row.length < maxRowSize) {
                    row.push(0);
                }
            }
            board = newBoard;
            rowSize = board.length;
            colSize = board[0].length;
        } else {
            let newBoard = [];
            let maxColSize = 0;
            for (let i = 0; i < colSize; i++) {
                let newCol = [];
                const map = new Map();
                for (let j = 0; j < rowSize; j++) {
                    if (board[j][i] === 0) continue;
                    map.set(board[j][i], (map.get(board[j][i]) || 0) + 1);
                }
                const arr = [...map.entries()];
                arr.sort((a, b) => {
                    if (a[1] === b[1]) return a[0] - b[0];
                    return a[1] - b[1];
                });
                for (const [num, count] of arr) {
                    newCol.push(num, count);
                }
                if (newCol.length > 100) {
                    newCol = newCol.slice(0, 100);
                }
                maxColSize = Math.max(maxColSize, newCol.length);
                for (let j = 0; j < newCol.length; j++) {
                    if (!newBoard[j]) newBoard[j] = Array(colSize).fill(0);
                    newBoard[j][i] = newCol[j];
                }
            }
            for (let i = 0; i < newBoard.length; i++) {
                for (let j = 0; j < colSize; j++) {
                    if (newBoard[i][j] === undefined) {
                        newBoard[i][j] = 0;
                    }
                }
            }
            board = newBoard;
            rowSize = board.length;
            colSize = board[0].length;
        }
        time++;
    }
    return -1;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [r, c, k] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(r, c, k, BOARD));
