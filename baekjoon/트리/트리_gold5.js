function solution(n, parents, target) {
    let leafNodeCount = 0;
    const tree = Array.from({ length: n }, () => []);
    let rootNode = -1;
    for (let i = 0; i < n; i++) {
        if (parents[i] === -1) {
            rootNode = i;
            continue;
        }
        tree[parents[i]].push(i);
    }

    // 재귀를 통해 삭제하는 노드를 null로 만들고
    // 최종적으로 빈 배열을 가진 노드의 갯수를 출력
    const deleteNodeRecursion = (current) => {
        if (tree[current].length === 0) {
            tree[current] = null;
            return;
        }
        for (const next of tree[current]) {
            deleteNodeRecursion(next);
        }
        tree[current] = null;
    };
    deleteNodeRecursion(target);
    for (let i = 0; i < n; i++) {
        if (tree[i]) {
            tree[i] = tree[i].filter((e) => e !== target);
            if (tree[i].length === 0) leafNodeCount++;
        }
    }
    return leafNodeCount;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const PARENT_NODES = input.shift().split(" ").map(Number);
const TARGET_NODE = Number(input.shift());
console.log(solution(N, PARENT_NODES, TARGET_NODE));
