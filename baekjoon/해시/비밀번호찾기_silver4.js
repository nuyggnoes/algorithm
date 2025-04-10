function solution(n, m, board, target) {
    const map = new Map();
    board.forEach(([address, password]) => {
        map.set(address, password);
    });
    return target.map((e) => map.get(e)).join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.slice(0, N).map((e) => e.split(" "));
const TARGET = input.slice(N);
console.log(solution(N, M, BOARD, TARGET));
