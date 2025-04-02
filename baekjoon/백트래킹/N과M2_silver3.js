function solution(n, m) {
    const answer = [];
    const visited = Array.from({ length: n }, () => false);
    const arr = [];
    const dfs = (depth, start) => {
        if (depth === m) {
            answer.push([...arr]);
            return;
        }
        for (let i = start; i < n; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            arr.push(i + 1);
            dfs(depth + 1, i);
            visited[i] = false;
            arr.pop();
        }
    };
    dfs(0, 0);
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => +e);
const result = solution(N, M);
result.map((e) => console.log(e.join(" ")));
