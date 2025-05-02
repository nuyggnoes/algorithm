function solution(R, C, T, BOARD) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let upX = 0;
    let downX = 0;
    for (let i = 0; i < R; i++) {
        if (BOARD[i][0] === -1) {
            upX = i;
            downX = i + 1;
            break;
        }
    }
    const spread = () => {
        const addDust = Array.from({ length: R }, () => Array(C).fill(0));
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (BOARD[i][j] > 0) {
                    let spreadCount = 0;
                    const amount = Math.floor(BOARD[i][j] / 5);
                    for (let d = 0; d < 4; d++) {
                        const [nx, ny] = [i + dx[d], j + dy[d]];
                        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
                        if (BOARD[nx][ny] === -1) continue;
                        addDust[nx][ny] += amount;
                        spreadCount++;
                    }
                    BOARD[i][j] -= amount * spreadCount;
                }
            }
        }
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                BOARD[i][j] += addDust[i][j];
            }
        }
    };
    const operateCleaner = () => {
        // 위쪽
        const circulateUp = (upX) => {
            for (let i = upX - 1; i > 0; i--) BOARD[i][0] = BOARD[i - 1][0];
            for (let j = 0; j < C - 1; j++) BOARD[0][j] = BOARD[0][j + 1];
            for (let i = 0; i < upX; i++) BOARD[i][C - 1] = BOARD[i + 1][C - 1];
            for (let j = C - 1; j > 1; j--) BOARD[upX][j] = BOARD[upX][j - 1];
            BOARD[upX][1] = 0;
            BOARD[upX][0] = -1;
        };
        // 아랫쪽
        const circulateDown = (downX) => {
            for (let i = downX + 1; i < R - 1; i++)
                BOARD[i][0] = BOARD[i + 1][0];
            for (let j = 0; j < C - 1; j++)
                BOARD[R - 1][j] = BOARD[R - 1][j + 1];
            for (let i = R - 1; i > downX; i--)
                BOARD[i][C - 1] = BOARD[i - 1][C - 1];
            for (let j = C - 1; j > 1; j--)
                BOARD[downX][j] = BOARD[downX][j - 1];
            BOARD[downX][1] = 0;
            BOARD[downX][0] = -1;
        };
        circulateUp(upX);
        circulateDown(downX);
    };
    for (let t = 0; t < T; t++) {
        spread();
        operateCleaner();
    }

    let answer = 0;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (BOARD[i][j] > 0) {
                answer += BOARD[i][j];
            }
        }
    }

    return answer;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [R, C, T] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(R, C, T, BOARD));
