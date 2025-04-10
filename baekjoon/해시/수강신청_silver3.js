function solution(k, l, record) {
    const map = new Map();
    record.forEach((r) => {
        if (!map.has(r)) map.set(r, 1);
        else {
            map.delete(r);
            map.set(r, 1);
        }
    });
    return [...map.keys()].slice(0, k).join("\n");
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [K, L] = input.shift().split(" ").map(Number);
const RECORD = input.map((e) => e);
console.log(solution(K, L, RECORD));
