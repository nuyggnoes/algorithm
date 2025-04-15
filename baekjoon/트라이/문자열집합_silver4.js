function solution(n, m, dict, target) {
    const map = new Map();
    let count = 0;
    dict.forEach((element) => {
        map.set(element, (map.get(element) || 0) + 1);
    });
    target.forEach((element) => {
        if (map.has(element)) count++;
    });
    return count;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const DICT = input.slice(1, 1 + N);
const TARGET = input.slice(1 + N);
console.log(solution(N, M, DICT, TARGET));
