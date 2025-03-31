function solution(n, cardN, m, cardM) {
    const result = [];
    cardN.sort((a, b) => a - b);
    for (let i = 0; i < m; i++) {
        let left = 0;
        let right = n - 1;
        let flag = false;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (cardN[mid] > cardM[i]) {
                right = mid - 1;
            } else if (cardN[mid] < cardM[i]) {
                left = mid + 1;
            } else {
                flag = true;
                break;
            }
        }
        flag ? result.push(1) : result.push(0);
    }
    return result;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const CARD_N = input.shift().split(" ").map(Number);
const M = Number(input.shift());
const CARD_M = input.shift().split(" ").map(Number);

console.log(solution(N, CARD_N, M, CARD_M).join(" "));
