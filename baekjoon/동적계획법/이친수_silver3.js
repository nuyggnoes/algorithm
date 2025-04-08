function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = BigInt(1);
    dp[2] = BigInt(1);
    for (let i = 3; i <= n; i++) {
        dp[i] = BigInt(dp[i - 1] + dp[i - 2]);
    }
    return dp[n].toString();
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(solution(N));
