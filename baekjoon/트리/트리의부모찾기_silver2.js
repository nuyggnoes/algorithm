function solution(n, nodes) {
    const parent = new Array(n + 1).fill(0);
    const tree = Array.from({ length: n + 1 }, () => []);
    for (const [from, to] of nodes) {
        tree[from].push(to);
        tree[to].push(from);
    }
    const dfs = (current) => {
        for (const next of tree[current]) {
            if (parent[current] === next) continue;
            parent[next] = current;
            dfs(next);
        }
    };
    dfs(1);
    return parent.slice(2).join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NODES = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, NODES));
