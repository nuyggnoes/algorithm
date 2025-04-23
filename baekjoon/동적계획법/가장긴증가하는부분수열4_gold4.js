function solution(n, arr) {
    const dp = Array(n).fill(1);
    const parent = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
    }
    let maxLen = Math.max(...dp);
    let index = dp.indexOf(maxLen);

    const answer = [];
    while (index !== -1) {
        answer.push(arr[index]);
        index = parent[index];
    }
    console.log(maxLen);
    console.log(answer.reverse().join(" "));
}

let input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const A = input.shift().split(" ").map(Number);
solution(N, A);
