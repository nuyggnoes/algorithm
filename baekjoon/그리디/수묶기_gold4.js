function solution(n, arr) {
    const positive = [];
    const negative = [];
    let ones = 0;
    let zeros = 0;
    let answer = 0;

    for (const num of arr) {
        if (num > 1) positive.push(num);
        if (num === 1) ones++;
        if (num === 0) zeros++;
        if (num < 0) negative.push(num);
    }
    console.log(positive, negative);
    positive.sort((a, b) => b - a);
    negative.sort((a, b) => a - b);

    for (let i = 0; i < positive.length; i += 2) {
        if (i + 1 < positive.length) {
            answer += positive[i] * positive[i + 1];
        } else answer += positive[i];
    }

    for (let i = 0; i < negative.length; i += 2) {
        if (i + 1 < negative.length) {
            answer += negative[i] * negative[i + 1];
        } else answer += zeros > 0 ? 0 : negative[i];
    }
    answer += ones;

    return answer;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const ARR = input.map(Number);
console.log(solution(N, ARR));
