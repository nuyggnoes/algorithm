function solution(n) {
    const memo = new Array(n + 1).fill(0);
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 3;
    for (let i = 4; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
    }
    return memo[n];
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(solution(N));
