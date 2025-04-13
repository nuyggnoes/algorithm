// 아이디어 힌트
// 가상의 노드를 하나 설정
function solution(n, self, info) {
    const edges = [];
    const parent = Array(n + 1).fill(-1);
    console.log(parent);
    const find = (x) => {
        if (parent[x] < 0) return x;
        return (parent[x] = find(parent[x]));
    };

    const union = (u, v) => {
        u = find(u);
        v = find(v);
        if (u === v) return false;
        if (parent[u] < parent[v]) {
            parent[u] += parent[v];
            parent[v] = u;
        } else {
            parent[v] += parent[u];
            parent[u] = v;
        }
        return true;
    };

    for (let i = 0; i < n; i++) {
        edges.push([0, i + 1, self[i]]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            edges.push([i + 1, j + 1, info[i][j]]);
        }
    }

    edges.sort((a, b) => a[2] - b[2]);

    let totalCost = 0;
    for (const [u, v, cost] of edges) {
        if (union(u, v)) {
            totalCost += cost;
        }
    }

    return totalCost;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const SELF = input.splice(0, N).map(Number);
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, SELF, INFO));
