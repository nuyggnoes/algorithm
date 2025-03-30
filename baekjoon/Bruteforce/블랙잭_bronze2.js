function solution(n, m, cards) {
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                sum = cards[i] + cards[j] + cards[k];
                if (sum <= m && sum > maxSum) {
                    maxSum = sum;
                }
            }
        }
    }
    return maxSum;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ");
const CARD = input[0].split(" ").map(Number);
console.log(solution(N, M, CARD));
