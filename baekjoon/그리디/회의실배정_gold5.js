function solution(n, times) {
    times.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });
    let answer = 1;
    let endTime = times[0][1];
    for (let i = 1; i < n; i++) {
        const [start, end] = times[i];
        if (start >= endTime) {
            endTime = end;
            answer++;
        }
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const TIME_TABLE = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, TIME_TABLE));
