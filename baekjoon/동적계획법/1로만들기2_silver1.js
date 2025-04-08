function solution(n) {
    const dp = Array.from({ length: n + 1 }, () => 0);
    const prev = Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        prev[i] = i - 1;

        if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
            dp[i] = dp[i / 2] + 1;
            prev[i] = i / 2;
        }

        if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
            dp[i] = dp[i / 3] + 1;
            prev[i] = i / 3;
        }
    }
    const path = [];
    let cur = n;
    while (cur > 0) {
        path.push(cur);
        cur = prev[cur];
    }
    console.log(dp[n]);
    console.log(path.join(" "));
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
solution(N);
