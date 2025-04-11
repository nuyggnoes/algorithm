// 메모리 초과
// 우선순위큐로 다시 풀기
function solution(n, k, jewels, bags) {
    jewels.sort((a, b) => a[0] - b[0]);
    bags.sort((a, b) => a - b);

    let result = 0;
    let jewelIdx = 0;
    const candidates = [];

    for (let i = 0; i < k; i++) {
        const bagCap = bags[i];
        while (jewelIdx < n && jewels[jewelIdx][0] <= bagCap) {
            candidates.push(jewels[jewelIdx][1]);
            jewelIdx++;
        }
        if (candidates.length > 0) {
            const maxVal = Math.max(...candidates);
            result += maxVal;

            const idxToRemove = candidates.indexOf(maxVal);
            candidates.splice(idxToRemove, 1);
        }
    }
    return result;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const JEWEL = [];
const BAG = [];
for (let i = 0; i < N; i++) {
    JEWEL.push(input[i].split(" ").map(Number));
}
for (let i = N; i < N + K; i++) {
    BAG.push(Number(input[i]));
}

console.log(solution(N, K, JEWEL, BAG));
