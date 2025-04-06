const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const BOARD = input.map((e) => e.split(" ").map(Number));
let answer = [0, 0, 0];

function recursion(y, x, n) {
    let target = BOARD[y][x];
    let flag = true;
    for (let i = y; i < y + n; i++) {
        for (let j = x; j < x + n; j++) {
            if (arr[i][j] !== target) {
                flag = false;
                break;
            }
        }
        if (!flag) break;
    }
    if (flag) {
        answer[target + 1]++;
    } else {
        recursion(y, x, n / 3);
        recursion(y, x + n / 3, n / 3);
        recursion(y, x + (n / 3) * 2, n / 3);
        recursion(y + n / 3, x, n / 3);
        recursion(y + n / 3, x + n / 3, n / 3);
        recursion(y + n / 3, x + (n / 3) * 2, n / 3);
        recursion(y + (n / 3) * 2, x, n / 3);
        recursion(y + (n / 3) * 2, x + n / 3, n / 3);
        recursion(y + (n / 3) * 2, x + (n / 3) * 2, n / 3);
    }
}
recursion(0, 0, N);
console.log(answer);
