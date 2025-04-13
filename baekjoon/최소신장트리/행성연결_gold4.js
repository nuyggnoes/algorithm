function solution(n, info) {
    const edges = [];
    const parent = Array(n + 1).fill(-1);
    const find = (x) => {
        if (parent[x] < 0) return x;
        return (parent[x] = find(parent[x]));
    };
    const union = (u, v) => {
        u = find(u);
        v = find(v);
        if (u === v) return false;
        parent[v] = u;
        return true;
    };
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            edges.push([i + 1, j + 1, info[i][j]]);
        }
    }
    edges.sort((a, b) => a[2] - b[2]);
    let totalCost = 0;
    let count = 0;
    for (const [u, v, cost] of edges) {
        if (union(u, v)) {
            totalCost += cost;
            count++;
        }
        if (count === n - 1) break;
    }
    return totalCost;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, INFO));
