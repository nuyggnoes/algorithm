function solution(n, tp) {
    const dp = new Array(N + 1).fill(0);
    for (let i = 0; i < n; i++) {
        const [time, profit] = tp[i];
        if (i + time <= n) {
            dp[i + time] = Math.max(dp[i + time], dp[i] + profit);
        }
        dp[i + 1] = Math.max(dp[i + 1], dp[i]);
    }
    return dp[n];
}
const [n, ...arr] = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(n);
const TP = arr.map((tp) => tp.split(" ").map(Number));
console.log(solution(N, TP));
