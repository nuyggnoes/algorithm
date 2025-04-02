function solution(n, numbers, expressions) {
    // prettier-ignore
    const calculator = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
        (a, b) => parseInt(a / b),
    ];
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;

    const dfs = (count, result) => {
        if (count === n - 1) {
            maxNum = Math.max(maxNum, result);
            minNum = Math.min(minNum, result);
            return;
        } else {
            for (let i = 0; i < expressions.length; i++) {
                if (expressions[i] === 0) continue;
                expressions[i]--;
                dfs(count + 1, calculator[i](result, numbers[count + 1]));
                expressions[i]++;
            }
        }
    };
    dfs(0, numbers[0]);
    console.log(maxNum ? maxNum : 0);
    console.log(minNum ? minNum : 0);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const [NUMBER, EXPRESSION] = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, NUMBER, EXPRESSION));
