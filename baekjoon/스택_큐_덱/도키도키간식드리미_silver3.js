function solution(n, student) {
    const waiting = [];
    let current = 1;
    let flag = true;

    while (current <= n) {
        if (waiting.at(-1) === current) {
            waiting.pop();
            current++;
        } else {
            if (student.length === 0) {
                flag = false;
                break;
            } else {
                let now = student.shift();
                if (now === current) {
                    current++;
                } else {
                    waiting.push(now);
                }
            }
        }
    }
    return flag ? "Nice" : "Sad";
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const STUDENT = input
    .shift()
    .split(" ")
    .map((e) => +e);
console.log(solution(N, STUDENT));
