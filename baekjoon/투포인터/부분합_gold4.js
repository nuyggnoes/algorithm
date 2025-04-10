function solution(n, s, number) {
    let answer = n + 1;
    let end = 0;
    let sum = 0;
    for (let start = 0; start < n; start++) {
        while (end < n && sum < s) {
            sum += number[end];
            end++;
        }
        if (sum >= s) answer = Math.min(end - start, answer);
        sum -= number[start];
    }
    return answer === n + 1 ? 0 : answer;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, S] = input.shift().split(" ").map(Number);
const NUMBER = input.shift().split(" ").map(Number);
console.log(solution(N, S, NUMBER));
