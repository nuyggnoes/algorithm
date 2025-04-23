function solution(t, w, tree) {
    const dp = Array.from({ length: t + 1 }, () => Array(w + 1).fill(0));
    // dp[i][j] = i초에 j번 움직일 때 받을 수 있는 자두의 개수
    for (let i = 1; i <= t; i++) {
        for (let j = 0; j <= w; j++) {
            const currentTree = j % 2 === 0 ? 1 : 2;
            const jadoo = tree[i - 1] === currentTree ? 1 : 0;

            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + jadoo);
            if (j > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + jadoo);
            }
        }
    }
    return Math.max(...dp[t]);
}

let input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [T, W] = input.shift().split(" ").map(Number);
const TREE = input.map((e) => +e);
console.log(solution(T, W, TREE));
