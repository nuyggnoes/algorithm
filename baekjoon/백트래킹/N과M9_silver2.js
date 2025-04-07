function solution(n, m, numbers) {
    const answer = [];
    const visited = Array(n).fill(false);
    const recursion = (depth, arr = []) => {
        if (depth === m) {
            answer.push(arr.join(" "));
            return;
        }
        let prev = null;
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            if (numbers[i] === prev) continue;
            visited[i] = true;
            arr.push(numbers[i]);
            recursion(depth + 1, arr);
            visited[i] = false;
            arr.pop();
            prev = numbers[i];
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
console.log(solution(N, M, NUMBER).join("\n"));
