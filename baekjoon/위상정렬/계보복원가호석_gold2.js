// 실패: 출력초과
// N+2 줄 출력
function solution(n, people, m, info) {
    const graph = new Map();
    const indegree = new Map();
    const q = [];
    const grandParent = [];

    info.sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < n; i++) {
        indegree.set(people[i], []);
        graph.set(people[i], []);
    }
    info.forEach(([child, parent]) => {
        indegree.get(child).push(parent);
        graph.get(parent).push(child);
    });
    for (const [key, value] of indegree) {
        if (value.length === 0) {
            q.push(key);
            grandParent.push(key);
        }
    }

    while (q.length > 0) {
        const current = q.shift();
        for (const next of graph.get(current)) {
            const parents = indegree.get(next);
            if (parents.length > 1) {
                const directChild = graph.get(current).filter((name) => name !== next);
                graph.set(current, directChild);
            }
        }
    }
    const result = [];
    result.push(grandParent.length.toString()); // 1
    result.push(grandParent.sort((a, b) => a.localeCompare(b)).join(" ")); // 2
    const sorted = [...graph.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(([key, value]) => {
        const children = value.sort((a, b) => a.localeCompare(b));
        result.push(`${key} ${children.length} ${children.join(" ")}`.trim());
    });
    return result.join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const PEOPLE = input.shift().split(" ");
const M = Number(input.shift());
const INFO = input.map((e) => e.split(" "));
console.log(solution(N, PEOPLE, M, INFO));
