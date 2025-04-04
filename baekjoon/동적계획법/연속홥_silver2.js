function solution(n, number) {
    let answer = number[0];
    for (let i = 1; i < n; i++) {
        number[i] = Math.max(number[i], number[i - 1] + number[i]);
        answer = Math.max(number[i], answer);
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
console.log(input);
const NUMBER = input
    .shift()
    .split(" ")
    .map((e) => +e);
console.log(solution(N, NUMBER));
