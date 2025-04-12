function solution(n, nodes) {
    let answer = "";
    let treeCount = 0;
    const tree = Array.from({ length: n + 1 }, () => []);
    const visited = Array(n + 1).fill(false);

    for (const [from, to] of nodes) {
        tree[from].push(to);
        tree[to].push(from);
    }
    const isTree = (current, parent) => {
        visited[current] = true;
        for (const next of tree[current]) {
            if (!visited[next]) {
                if (!isTree(next, current)) return false;
            } else if (next !== parent) {
                return false;
            }
        }
        return true;
    };

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            if (isTree(i, 0)) treeCount++;
        }
    }
    return treeCount;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
let caseNumber = 1;
while (true) {
    const [N, M] = input.shift().split(" ").map(Number);
    if (N === 0 && M === 0) break;
    const NODES = input.splice(0, M).map((e) => e.split(" ").map(Number));
    const count = solution(N, NODES);
    let result = "";
    if (count === 0) result = `Case ${caseNumber}: No trees.`;
    else if (count === 1) result = `Case ${caseNumber}: There is one tree.`;
    else result = `Case ${caseNumber}: A forest of ${count} trees.`;
    console.log(result);
    caseNumber++;
}
