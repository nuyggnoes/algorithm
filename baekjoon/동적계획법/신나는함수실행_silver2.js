// if a <= 0 or b <= 0 or c <= 0, then w(a, b, c) returns:
//     1

// if a > 20 or b > 20 or c > 20, then w(a, b, c) returns:
//     w(20, 20, 20)

// if a < b and b < c, then w(a, b, c) returns:
//     w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)

// otherwise it returns:
//     w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
function solution(w_case) {
    const memo = Array.from({ length: 51 }, () => Array.from({ length: 51 }, () => Array(51).fill(0)));
    const w = (a, b, c) => {
        if (a <= 0 || b <= 0 || c <= 0) {
            return 1;
        }
        if (a > 20 || b > 20 || c > 20) {
            return w(20, 20, 20);
        }
        if (memo[a][b][c]) return memo[a][b][c];
        else memo[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);

        return memo[a][b][c];
    };

    const result = w_case
        .filter(([a, b, c]) => !(a === -1 && b === -1 && c === -1))
        .map(([a, b, c]) => `w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
    console.log(result.join("\n"));
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const W_CASE = input.map((e) => e.split(" ").map(Number));
solution(W_CASE);
