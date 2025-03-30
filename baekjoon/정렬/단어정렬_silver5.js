function solution(n, words) {
    words.sort((a, b) => {
        if (a.length === b.length) return a < b ? -1 : 1;
        return a.length - b.length;
    });
    console.log(words.join("\n"));
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const WORD = new Set(input);
console.log(solution(N, [...WORD]));
