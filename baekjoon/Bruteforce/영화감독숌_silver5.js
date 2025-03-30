function solution(n) {
    let num = 666;
    let count = 1;
    while (count !== n) {
        num++;
        if (String(num).includes("666")) count++;
    }
    console.log(num);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
let N = Number(input[0]);

console.log(solution(N));
