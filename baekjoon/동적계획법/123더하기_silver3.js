function solution(t, numbers) {
    const answer = [];
    const memo = Array.from({ length: 11 }, () => 0);
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;
    for (let i = 4; i < 11; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }
    for (let i = 0; i < T; i++) {
        answer.push(memo[numbers[i]]);
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [T, ...NUMBERS] = input.map(Number);
console.log(solution(T, NUMBERS).join("\n"));
