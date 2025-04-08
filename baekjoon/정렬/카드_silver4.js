function solution(n, number) {
    number.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    let count = 1;
    let maxValue = number[0];
    let maxCount = 0;
    number.forEach((v, i) => {
        let next = number[i + 1];
        if (v === next) count++;
        else count = 1;
        if (count > maxCount) {
            maxCount = count;
            maxValue = v;
        }
    });
    return String(maxValue);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = BigInt(input.shift());
const NUMBER = input.map(BigInt);
console.log(solution(N, NUMBER));
