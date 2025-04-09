function solution(n, k, wv) {
    const dp = Array(k + 1).fill(0);
    for (let i = 0; i < n; i++) {
        const [weight, value] = wv[i];
        for (let j = k; j >= weight; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight] + value);
        }
    }
    return dp[k];
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const WV = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, K, WV));
