function solution(s) {
    let one = s.split("0").filter((e) => e !== "").length;
    let zero = s.split("1").filter((e) => e !== "").length;
    return Math.min(one, zero);
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const S = input.shift();
console.log(solution(S));
