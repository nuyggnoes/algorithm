function solution(from, to, n, moves = []) {
    if (n === 1) {
        moves.push([from, to]);
        return moves;
    }
    solution(from, 6 - from - to, n - 1, moves);
    moves.push([from, to]);
    solution(6 - from - to, to, n - 1, moves);
    return moves;
}
let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input[0]);
const result = solution(1, 3, N);
console.log(result.length);
console.log(result.map(([from, to]) => `${from} ${to}`).join("\n"));
