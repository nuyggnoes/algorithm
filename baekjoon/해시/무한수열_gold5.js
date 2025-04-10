function solution(n, p, q) {
    const memo = new Map();
    function getA(x) {
        if (x === 0n) return 1;
        if (memo.has(x)) return memo.get(x);
        const result = getA(x / p) + getA(x / q);
        memo.set(x, result);
        return result;
    }
    return getA(n).toString();
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, P, Q] = input.shift().split(" ").map(BigInt);
console.log(solution(N, P, Q));
