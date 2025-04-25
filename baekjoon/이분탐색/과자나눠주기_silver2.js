// // 시간초과
// function solution(m, n, snack) {
//     function calculate(x) {
//         let count = 0;
//         const tmpSnack = [...snack];
//         for (let i = 0; i < n; i++) {
//             while (tmpSnack[i] - x >= 0) {
//                 count++;
//                 tmpSnack[i] -= x;
//             }
//         }
//         return count >= m;
//     }
//     let start = 1;
//     let end = 1000000;
//     while (start < end) {
//         let mid = Math.floor((start + end + 1) / 2);
//         if (calculate(mid)) start = mid;
//         else end = mid - 1;
//     }
//     return start;
// }

// const input = require("fs")
//     .readFileSync("example.txt")
//     .toString()
//     .trim()
//     .split("\n");
// const [M, N] = input.shift().split(" ").map(Number);
// const SNACK = input.shift().split(" ").map(Number);
// console.log(solution(M, N, SNACK));
