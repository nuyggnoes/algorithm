function solution(n, m, numbers) {
    const answer = [];
    const recursion = (start, arr = []) => {
        if (arr.length === m) {
            answer.push([...arr]);
            return;
        }
        for (let i = start; i < n; i++) {
            arr.push(numbers[i]);
            recursion(i + 1, arr);
            arr.pop();
        }
    };
    recursion(0);
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => +e);
const NUMBER = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
console.log(
    solution(N, M, NUMBER)
        .map((e) => e.join(" "))
        .join("\n")
);
