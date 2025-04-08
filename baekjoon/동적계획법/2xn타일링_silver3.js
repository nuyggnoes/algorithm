function solution(n) {
    const dp = new Array(n + 1).fill(0);
    const MOD = 10007;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
    return dp[n];
}
let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(solution(N));
