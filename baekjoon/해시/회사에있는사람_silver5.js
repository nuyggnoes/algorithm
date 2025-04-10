function solution(n, record) {
    const map = new Map();
    record.forEach(([name, state]) => {
        if (state === "enter") {
            map.set(name, true);
        } else map.delete(name);
    });
    return [...map.keys()].sort((a, b) => (a > b ? -1 : 1)).join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const RECORD = input.map((e) => e.split(" "));
console.log(solution(N, RECORD));
