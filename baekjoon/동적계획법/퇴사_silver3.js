function solution(n, counsel) {
    const dp = new Array(N).fill(0);

    for (let i = 0; i < n; i++) {
        const [period, profit] = counsel[i];
        if (i + period > N) continue;
        dp[i] = dp[i] + profit;

        for (let j = i + period; j < N; j++) {
            dp[j] = Math.max(dp[j], dp[i]);
        }
    }
    return Math.max(...dp);
}
const [n, ...arr] = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(n);
const counsel = arr.map((tp) => tp.split(" ").map(Number));

console.log(solution(N, counsel));
