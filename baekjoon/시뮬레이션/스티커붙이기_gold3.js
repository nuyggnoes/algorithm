function solution(n, m, k, stickers) {
    const notebook = Array.from({ length: n }, () => Array(m).fill(0));
    let count = 0;

    const rotateDegree = (r, c, sticker) => {
        const resultSticker = Array.from({ length: c }, () => Array(r).fill(-1));
        for (let i = 0; i < sticker.length; i++) {
            for (let j = 0; j < sticker[i].length; j++) {
                resultSticker[j][r - i - 1] = sticker[i][j];
            }
        }
        return [c, r, resultSticker];
    };
    const canAttach = (x, y, r, c, sticker) => {
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (sticker[i][j] === 1 && notebook[x + i][y + j] === 1) return false;
            }
        }
        return true;
    };
    const attach = (x, y, r, c, sticker) => {
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (sticker[i][j] === 1) notebook[x + i][y + j] = 1;
            }
        }
    };
    const countSticker = (sticker) => {
        let count = 0;
        for (let row of sticker) {
            for (let cell of row) {
                if (cell === 1) count++;
            }
        }
        return count;
    };

    const putSticker = (r, c, sticker) => {
        for (let rotate = 0; rotate < 4; rotate++) {
            for (let i = 0; i <= n - r; i++) {
                for (let j = 0; j <= m - c; j++) {
                    if (canAttach(i, j, r, c, sticker)) {
                        attach(i, j, r, c, sticker);
                        return countSticker(sticker);
                    }
                }
            }
            [r, c, sticker] = rotateDegree(r, c, sticker);
        }
        return 0;
    };

    for (const [r, c, sticker] of stickers) {
        count += putSticker(r, c, sticker);
        console.log(notebook);
    }
    return count;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M, K] = input.shift().split(" ").map(Number);
const STICKERS = [];
for (let i = 0; i < K; i++) {
    const [r, c] = input.shift().split(" ").map(Number);
    const sticker = input.splice(0, r).map((e) => e.split(" ").map(Number));
    STICKERS.push([r, c, sticker]);
}
console.log(solution(N, M, K, STICKERS));
