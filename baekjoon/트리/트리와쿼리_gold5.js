function solution(n, r, q, nodes, query) {
    const answer = [];
    const tree = Array.from({ length: n + 1 }, () => []);
    const size = Array(n + 1).fill(0);

    for (const [from, to] of nodes) {
        tree[from].push(to);
        tree[to].push(from);
    }
    const countSubTreeNodes = (current, parent) => {
        size[current] = 1;
        for (const node of tree[current]) {
            if (node === parent) continue;
            countSubTreeNodes(node, current);
            size[current] += size[node];
        }
    };
    countSubTreeNodes(r);
    query.map((e) => answer.push(size[e]));
    return answer.join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, R, Q] = input.shift().split(" ").map(Number);
const NODES = input.splice(0, N - 1).map((e) => e.split(" ").map(Number));
const QUERY = input.splice(0, Q).map(Number);
console.log(solution(N, R, Q, NODES, QUERY));
