function solution(t, numbers) {
    const answer = [];
    const dp = Array.from({ length: 41 }, () => Array(2).fill(0));
    dp[0] = [1, 0];
    dp[1] = [0, 1];
    for (let i = 2; i < 41; i++) {
        dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
    }
    numbers.forEach((number) => {
        answer.push(dp[number].join(" "));
    });
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [T, ...NUMBERS] = input.map(Number);
console.log(solution(T, NUMBERS).join("\n"));
