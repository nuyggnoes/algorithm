function solution(n, k, info, m, target) {
    const p = Array(n + 1).fill(-1);
    const result = [];
    const find = (x) => {
        if (p[x] < 0) return x;
        return (p[x] = find(p[x]));
    };
    const union = (u, v) => {
        u = find(u);
        v = find(v);
        if (u === v) return false;
        if (p[u] < p[v]) {
            p[u] += p[v];
            p[v] = u;
        } else {
            p[v] += p[u];
            p[u] = v;
        }
        return true;
    };
    info.forEach(([u, v]) => {
        union(u, v);
    });
    target.forEach(([u, v]) => {
        if (find(u) === find(v)) result.push(1);
        else result.push(0);
    });
    return result;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
let T = Number(input.shift());
let idx = 1;
let output = [];

while (T > 0) {
    const N = Number(input.shift());
    const K = Number(input.shift());
    const INFO = input.splice(0, K).map((e) => e.split(" ").map(Number));
    const M = Number(input.shift());
    const TARGET = input.splice(0, M).map((e) => e.split(" ").map(Number));
    const answer = solution(N, K, INFO, M, TARGET);
    output.push(`Scenario ${idx}:\n${answer.join("\n")}\n`);
    T--;
    idx++;
}
console.log(output.join("\n"));
