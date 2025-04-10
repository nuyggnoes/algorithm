function solution(n, number) {
    let answer = 0;
    let end = 0;
    const set = new Set();
    for (let start = 0; start < n; start++) {
        while (end < n && !set.has(number[end])) {
            set.add(number[end]);
            end++;
        }
        console.log(start, end);
        answer += end - start;
        set.delete(number[start]);
    }
    return answer;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NUMBER = input.shift().split(" ").map(Number);
console.log(solution(N, NUMBER));
