const MAX = 1_000_000;
const MOD = 1_000_000_009;
const memo = Array(MAX + 1).fill(0);
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;
for (let i = 4; i <= MAX; i++) {
    memo[i] = (memo[i - 3] + memo[i - 2] + memo[i - 1]) % MOD;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");

let T = +input.shift();
const answer = [];
while (T-- > 0) {
    const n = +input.shift();
    answer.push(memo[n]);
}
console.log(answer.join("\n"));
