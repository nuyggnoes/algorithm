function solution(n) {
    let answer = Array.from({ length: N + 1 }, () => 0);
    answer[2] = 1;
    answer[3] = 1;

    for (let i = 4; i <= n; i++) {
        answer[i] = answer[i - 1] + 1;
        if (i % 3 === 0) answer[i] = Math.min(answer[i], answer[i / 3] + 1);
        if (i % 2 === 0) answer[i] = Math.min(answer[i], answer[i / 2] + 1);
    }
    return answer[n];
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(solution(N));
