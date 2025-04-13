function solution(n, m, info) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const indegree = Array(n + 1).fill(0);
    const q = [];
    const answer = [];
    info.forEach(([from, to]) => {
        graph[from].push(to);
        indegree[to]++;
    });
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) q.push(i);
    }
    while (q.length > 0) {
        let current = q.shift();
        answer.push(current);
        for (const next of graph[current]) {
            indegree[next]--;
            if (indegree[next] === 0) q.push(next);
        }
    }
    return answer.join(" ");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, INFO));
