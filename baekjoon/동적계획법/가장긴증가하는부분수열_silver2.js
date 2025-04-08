function solution(n, number) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (number[i] > number[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NUMBER = input
    .shift()
    .split(" ")
    .map((e) => +e);
console.log(solution(N, NUMBER));
