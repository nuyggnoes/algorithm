const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.trim());
}).on("close", function () {
    const [N, M] = input.shift().split(" ").map(Number);
    const INFO = input.map((e) => e.split(" ").map(Number));
    console.log(solution(N, M, INFO));
});

function solution(n, m, info) {
    const p = Array(n + 1).fill(-1);
    const answer = [];
    const find = (x) => {
        if (p[x] < 0) return x;
        return (p[x] = find(p[x]));
    };
    const union = (u, v) => {
        u = find(u);
        v = find(v);
        if (u === v) return false;
        p[v] = u;
        return true;
    };
    info.forEach(([cmd, u, v]) => {
        if (cmd === 0) {
            union(u, v);
        } else {
            find(u) === find(v) ? answer.push("YES") : answer.push("NO");
        }
    });
    return answer.join("\n");
}
