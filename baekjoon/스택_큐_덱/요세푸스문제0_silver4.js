function solution(n, k) {
    const answer = [];
    const num = Array.from({ length: n }, (_, i) => i + 1);
    while (num.length) {
        for (let i = 0; i < k; i++) {
            num.push(num.shift());
        }
        answer.push(num.pop());
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input
    .shift()
    .split(" ")
    .map((e) => +e);
console.log("<" + solution(N, K).join(", ") + ">");
