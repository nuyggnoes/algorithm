function solution(n, stairs) {
    const dp = Array(n).fill(0);
    dp[0] = stairs[0];
    dp[1] = dp[0] + stairs[1];
    dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];
    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i - 3] + stairs[i - 1] + stairs[i], dp[i - 2] + stairs[i]);
    }
    return dp[n - 1];
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, ...STAIRS] = input.map(Number);
console.log(solution(N, STAIRS));
