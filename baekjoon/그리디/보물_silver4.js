function solution(n, a, b) {
    let answer = 0;
    b.sort((a, b) => b - a);
    a.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const [A, B] = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, A, B));
