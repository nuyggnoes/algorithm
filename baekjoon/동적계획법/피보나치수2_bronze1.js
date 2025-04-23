function solution(n) {
    const dp = Array(n + 1).fill(0n);
    dp[0] = 0n;
    dp[1] = 1n;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n].toString();
}

let input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = Number(input.shift());
console.log(solution(N));
