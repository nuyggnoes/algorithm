function solution(n, m, number) {
    number.sort((a, b) => a - b);
    let answer = Number.MAX_SAFE_INTEGER;
    let end = 0;
    for (let start = 0; start < n; start++) {
        while (end < n && number[end] - number[start] < m) {
            end++;
        }
        if (end === n) break;
        answer = Math.min(answer, number[end] - number[start]);
    }
    return answer;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const NUMBER = input.map(Number);
console.log(solution(N, M, NUMBER));
