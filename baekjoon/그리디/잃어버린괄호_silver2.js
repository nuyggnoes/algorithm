function solution(formula) {
    const parts = formula.split("-");
    let result = parts[0]
        .split("+")
        .map(Number)
        .reduce((a, b) => a + b, 0);
    for (let i = 1; i < parts.length; i++) {
        const sum = parts[i]
            .split("+")
            .map(Number)
            .reduce((a, b) => a + b, 0);
        result -= sum;
    }
    return result;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const formula = input.shift();
console.log(solution(formula));
