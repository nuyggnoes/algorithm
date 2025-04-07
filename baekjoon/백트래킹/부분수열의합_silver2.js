function solution(n, s, numbers) {
    let answer = 0;
    const recursion = (index, sum) => {
        if (index === n) {
            if (sum === s) answer++;
            return;
        }
        recursion(index + 1, sum + numbers[index]);
        recursion(index + 1, sum);
    };
    recursion(0, 0);
    return s === 0 ? answer - 1 : answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, S] = input.shift().split(" ").map(Number);
const NUMBER = input.shift().split(" ").map(Number);
console.log(solution(N, S, NUMBER));
