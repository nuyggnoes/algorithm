function solution(n, words) {
    for (const word of words) {
    }
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(solution(N, input));
