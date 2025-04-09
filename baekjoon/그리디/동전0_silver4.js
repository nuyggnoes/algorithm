function solution(n, k, coin) {
    let answer = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (coin[i] <= k) {
            answer += Math.floor(k / coin[i]);
            k = k % coin[i];
        }
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const COIN = input.map(Number);
console.log(solution(N, K, COIN));
