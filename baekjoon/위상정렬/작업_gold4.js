function solution(n, info) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const indegree = Array(n + 1).fill(0);
    const cost = Array(n + 1).fill(0);
    const dp = Array(n + 1).fill(0);
    const q = [];
    info.map((e, index) => {
        const [c, n, ...from] = e;
        for (const node of from) {
            graph[node].push(index + 1);
            indegree[index + 1]++;
        }
        cost[index + 1] = c;
    });
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) {
            q.push(i);
            dp[i] = cost[i];
        }
    }
    while (q.length > 0) {
        const current = q.shift();
        for (const next of graph[current]) {
            dp[next] = Math.max(dp[current] + cost[next], dp[next]);
            indegree[next]--;
            if (indegree[next] === 0) {
                q.push(next);
            }
        }
    }
    return Math.max(...dp);
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, INFO));
