function solution(n, home) {
    for (let i = 1; i < n; i++) {
        home[i][0] += Math.min(home[i - 1][1], home[i - 1][2]);
        home[i][1] += Math.min(home[i - 1][0], home[i - 1][2]);
        home[i][2] += Math.min(home[i - 1][1], home[i - 1][0]);
    }
    return Math.min(...home[n - 1]);
}
let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const HOME = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, HOME));
