function solution(n, m) {
    const answer = [];
    const arr = [];
    const dfs = (depth) => {
        if (depth === m) {
            answer.push(arr.join(" "));
            return;
        }
        for (let i = 0; i < n; i++) {
            arr.push(i + 1);
            dfs(depth + 1);
            arr.pop();
        }
    };
    dfs(0);
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => +e);
const result = solution(N, M);
console.log(result.join("\n"));
