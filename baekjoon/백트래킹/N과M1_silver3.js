function solution(n, m) {
    const answer = [];
    const visited = Array.from({ length: n }, () => false);
    const arr = [];
    const dfs = (depth) => {
        if (depth === m) {
            answer.push([...arr]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                arr.push(i + 1);
                dfs(depth + 1);
                visited[i] = false;
                arr.pop();
            }
        }
    };
    dfs(0);
    console.log(answer);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => +e);
console.log(solution(N, M));
