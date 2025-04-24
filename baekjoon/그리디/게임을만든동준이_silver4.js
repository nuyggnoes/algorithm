function solution(n, arr) {
    let answer = 0;
    for (let i = arr.length - 2; i >= 0; i--) {
        let nextLevel = arr[i + 1];
        if (arr[i] < nextLevel) continue;
        const diff = Math.abs(arr[i] - (nextLevel - 1));
        answer += diff;
        arr[i] = nextLevel - 1;
    }
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
