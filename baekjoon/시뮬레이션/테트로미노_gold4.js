function solution(n, m, board) {
    const TETROMINO = [
        [[1, 1, 1, 1]],
        [
            [1, 1],
            [1, 1],
        ],
        [
            [1, 0],
            [1, 0],
            [1, 1],
        ],
        [
            [1, 0],
            [1, 1],
            [0, 1],
        ],
        [
            [1, 1, 1],
            [0, 1, 0],
        ],
    ];
    let answer = 0;

    function rotate(arr) {
        const r = arr.length;
        const c = arr[0].length;
        const result = Array.from({ length: c }, () => Array(r).fill(-1));
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                result[j][r - i - 1] = arr[i][j];
            }
        }
        return result;
    }

    function flip(arr) {
        const newArr = arr.map((row) => [...row]);
        for (let i = 0; i < newArr.length; i++) {
            newArr[i].reverse();
        }
        return newArr;
    }

    function searchBoard(tetromino) {
        const r = tetromino.length;
        const c = tetromino[0].length;
        let maxSum = 0;
        for (let i = 0; i <= n - r; i++) {
            for (let j = 0; j <= m - c; j++) {
                let sum = 0;
                for (let x = 0; x < r; x++) {
                    for (let y = 0; y < c; y++) {
                        if (tetromino[x][y] === 1) {
                            sum += board[i + x][j + y];
                        }
                    }
                }
                maxSum = Math.max(maxSum, sum);
            }
        }
        return maxSum;
    }

    TETROMINO.forEach((tetromino) => {
        const set = new Set();
        for (let fl = 0; fl < 2; fl++) {
            let cur = tetromino.map((row) => [...row]);
            for (let ro = 0; ro < 4; ro++) {
                const key = JSON.stringify(cur);
                if (!set.has(key)) {
                    set.add(key);
                    answer = Math.max(answer, searchBoard(cur));
                }
                cur = rotate(cur);
            }
            tetromino = flip(tetromino);
        }
    });
    return answer;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((row) => row.split(" ").map(Number));

console.log(solution(N, M, BOARD));
