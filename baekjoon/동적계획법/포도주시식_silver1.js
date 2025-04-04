function solution(n, wine) {
    const dp = Array(n + 1).fill(0);
    wine.unshift(0);
    dp[1] = wine[1];
    dp[2] = wine[1] + wine[2];
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(dp[i - 3] + wine[i - 1] + wine[i], dp[i - 2] + wine[i], dp[i - 1]);
    }
    console.log(dp);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const WINE = input.map(Number);
console.log(solution(N, WINE));
