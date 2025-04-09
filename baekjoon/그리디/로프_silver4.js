function solution(n, rope) {
    let answer = [];
    rope.sort((a, b) => b - a);
    for (let i = 0; i < n; i++) {
        answer.push(rope[i] * (i + 1));
    }
    return Math.max(...answer);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, ...ROPE] = input.map(Number);
console.log(solution(N, ROPE));
