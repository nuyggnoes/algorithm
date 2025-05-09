function solution(n, k, wv) {
    const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
    for (let i = 1; i <= N; i++) {
        const [w, v] = wv[i - 1];

        for (let j = 0; j <= K; j++) {
            if (j < w) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
            }
        }
    }
    console.log(dp.map((e) => e.join(" ")).join("\n"));
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const WV = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, K, WV));
