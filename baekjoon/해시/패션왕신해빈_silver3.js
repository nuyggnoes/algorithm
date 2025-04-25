function solution(n, clothes) {
    const map = new Map();
    let answer = 1;
    for (const [name, kind] of clothes) {
        map.set(kind, (map.get(kind) || 1) + 1);
    }
    for (const value of map.values()) {
        answer *= value;
    }
    return answer - 1;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
let testcase = +input.shift();
while (testcase-- > 0) {
    const n = +input.shift();
    const CLOTHES = input.splice(0, n).map((e) => e.split(" "));
    console.log(solution(n, CLOTHES));
}
