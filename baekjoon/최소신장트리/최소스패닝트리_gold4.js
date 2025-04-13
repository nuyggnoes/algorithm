function solution(v, e, info) {
    const p = Array(v + 1).fill(-1);
    info.sort((a, b) => a[2] - b[2]);
    console.log(info);
    const find = (x) => {
        if (p[x] < 0) return x;
        return (p[x] = find(p[x]));
    };

    const union = (u, v) => {
        u = find(u);
        v = find(v);
        if (u === v) return false;
        if (p[u] === p[v]) p[u]--;
        if (p[u] < p[v]) {
            p[v] = u;
        } else {
            p[u] = v;
        }
        return true;
    };
    let answer = 0;
    let cnt = 0;
    for (let i = 0; i < e; i++) {
        const [a, b, cost] = info[i];
        if (!union(a, b)) continue;
        answer += cost;
        cnt++;
        if (cnt === v - 1) break;
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [V, E] = input.shift().split(" ").map(Number);
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(V, E, INFO));
