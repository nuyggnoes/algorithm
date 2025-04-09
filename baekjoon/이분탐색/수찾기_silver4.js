function solution(n, number, m, target) {
    function isInclude(value) {
        let start = 0;
        let end = n - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (value === number[mid]) return true;
            else if (value < number[mid]) {
                end = mid - 1;
            } else if (value > number[mid]) {
                start = mid + 1;
            }
        }
        return false;
    }
    let answer = [];
    number.sort((a, b) => a - b);
    for (let i = 0; i < m; i++) {
        isInclude(target[i]) ? answer.push(1) : answer.push(0);
    }
    return answer;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NUMBER = input.shift().split(" ").map(Number);
const M = Number(input.shift());
const TARGET = input.shift().split(" ").map(Number);
console.log(solution(N, NUMBER, M, TARGET).join("\n"));
