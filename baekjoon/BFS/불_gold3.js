/*
    첫 풀이는 실패
    문제점
    1. 불의 이동과 J의 이동을 동시에 처리
    2. 여러 개의 불에 대해 동시에 이동하지 않고 하나씩 처리
 */
// 수정본
// 불의 이동과 J의 이동을 따로 구현
function solution(r, c, board) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const distFire = Array.from({ length: r }, () => Array(c).fill(Infinity));
    const distJ = Array.from({ length: r }, () => Array(c).fill(-1));
    const queueF = [];
    const queueJ = [];

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (board[i][j] === "F") {
                queueF.push([i, j]);
                distFire[i][j] = 0;
            }
            if (board[i][j] === "J") {
                queueJ.push([i, j]);
                distJ[i][j] = 0;
            }
        }
    }

    let fireIndex = 0;
    while (fireIndex < queueF.length) {
        const [x, y] = queueF[fireIndex++];
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
            if (board[nx][ny] === "#" || distFire[nx][ny] !== Infinity) continue;
            distFire[nx][ny] = distFire[x][y] + 1;
            queueF.push([nx, ny]);
        }
    }
    let jIndex = 0;
    while (jIndex < queueJ.length) {
        const [x, y] = queueJ[jIndex++];
        if (x === 0 || x === r - 1 || y === 0 || y === c - 1) {
            return distJ[x][y] + 1;
        }
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
            if (board[nx][ny] === "#" || distJ[nx][ny] !== -1) continue;
            if (distJ[x][y] + 1 < distFire[nx][ny]) {
                distJ[nx][ny] = distJ[x][y] + 1;
                queueJ.push([nx, ny]);
            }
        }
    }
    return "IMPOSSIBLE";
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [R, C] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(""));
console.log(solution(R, C, BOARD));
