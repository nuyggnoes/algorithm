function solution(n, m, numbers, fromTo) {
    const answer = [];
    const dp = new Array(n + 1).fill(0);
    numbers.unshift(0);
    dp[1] = numbers[1];
    for (let i = 2; i <= n; i++) {
        dp[i] = numbers[i] + dp[i - 1];
    }
    fromTo.forEach(([i, j]) => {
        answer.push(dp[j] - dp[i - 1]);
    });
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const NUMBERS = input.shift().split(" ").map(Number);
const FROM_TO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, NUMBERS, FROM_TO).join("\n"));
