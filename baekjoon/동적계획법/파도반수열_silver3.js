function solution(t, p) {
    let answer = [];
    p.forEach((n) => {
        const memo = new Array(n + 1).fill(0);
        memo[1] = 1;
        memo[2] = 1;
        memo[3] = 1;
        for (let i = 4; i <= n; i++) {
            memo[i] = memo[i - 2] + memo[i - 3];
        }
        answer.push(memo[n]);
    });
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const T = Number(input.shift());
const P = input.map((e) => +e);
console.log(solution(T, P).join("\n"));
