// 잘못된 접근
// 다시 풀기
// function solution(board) {
//     let answer = 0;
//     const n = 5;
//     const SEVEN = 7;
//     const dx = [0, 1, 0, 1];
//     const dy = [1, 0, -1, 0];
//     const visited = Array.from({ length: n }, () => Array(n).fill(false));
//     const findSevenPrincess = (depth, current, countS = 0) => {
//         if (depth === SEVEN) {
//             if (countS >= 4) {
//                 console.log(visited);
//                 answer++;
//             }
//             return;
//         }
//         const [x, y] = current;
//         for (let i = 0; i < 4; i++) {
//             const [nx, ny] = [x + dx[i], y + dy[i]];
//             if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
//             if (visited[nx][ny]) continue;
//             visited[nx][ny] = true;
//             const isS = board[nx][ny] === "S" ? 1 : 0;
//             findSevenPrincess(depth + 1, [nx, ny], countS + isS);
//             countS -= isS;
//             visited[nx][ny] = false;
//         }
//     };
//     findSevenPrincess(0, [0, 0]);
//     return answer;
// }
let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const BOARD = input.map((e) => e.split(""));
console.log(solution(BOARD));
