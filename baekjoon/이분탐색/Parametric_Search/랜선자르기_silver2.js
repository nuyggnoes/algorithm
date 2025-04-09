function solution(k, n, cable) {
    function calculate(x) {
        let cur = 0;
        for (let i = 0; i < k; i++) {
            cur += Math.floor(cable[i] / x);
        }
        return cur >= n;
    }
    let start = 1;
    let end = 2 ** 32 - 1;
    while (start < end) {
        let mid = Math.floor((start + end + 1) / 2);
        if (calculate(mid)) start = mid;
        else end = mid - 1;
    }
    return start;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [K, N] = input.shift().split(" ").map(Number);
const CABLE = input.map(Number);
console.log(solution(K, N, CABLE));
