function solution(N, M, FIXED_SEAT) {
    const dp = Array(N + 1).fill(0);
    let answer = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= N; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    let start = 1;
    FIXED_SEAT.forEach((num) => {
        let len = num - start;
        start = num + 1;
        answer *= dp[len];
    });
    if (start < N) {
        let len = N - start + 1;
        answer *= dp[len];
    }
    return answer;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const M = +input.shift();
const FIXED_SEAT = input.map((e) => +e);
console.log(solution(N, M, FIXED_SEAT));
