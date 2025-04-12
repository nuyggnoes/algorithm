function solution(n, m, nodes, target) {
    const answer = [];
    const tree = Array.from({ length: n + 1 }, () => []);
    for (const [from, to, distance] of nodes) {
        tree[from].push([to, distance]);
        tree[to].push([from, distance]);
    }
    const calculateDistance = (current, target, parent = 0, sum = 0) => {
        if (current === target) {
            answer.push(sum);
            return;
        }
        for (const [next, distance] of tree[current]) {
            if (next === parent) continue;
            sum += distance;
            calculateDistance(next, target, current, sum);
            sum -= distance;
        }
    };
    target.forEach(([from, to]) => {
        calculateDistance(from, to);
    });
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const NODES = input.splice(0, N - 1).map((e) => e.split(" ").map(Number));
const TARGET = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, NODES, TARGET));
