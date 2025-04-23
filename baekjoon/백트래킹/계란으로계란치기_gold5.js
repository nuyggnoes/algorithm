function solution(n, eggInfo) {
    let max = 0;
    function dfs(depth) {
        if (depth === n) {
            const broken = eggInfo.filter(([s, w]) => s <= 0).length;
            max = Math.max(max, broken);
            return;
        }
        if (eggInfo[depth][0] <= 0) {
            dfs(depth + 1);
            return;
        }
        let hit = false;
        for (let i = 0; i < n; i++) {
            if (depth === i || eggInfo[i][0] <= 0) continue;

            eggInfo[i][0] -= eggInfo[depth][1];
            eggInfo[depth][0] -= eggInfo[i][1];
            hit = true;
            dfs(depth + 1);

            eggInfo[depth][0] += eggInfo[i][1];
            eggInfo[i][0] += eggInfo[depth][1];
        }
        if (!hit) dfs(depth + 1);
    }
    dfs(0);
    return max;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const EGGS = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, EGGS));
