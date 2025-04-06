function solution(n, r, c) {
    if (n === 0) return 0;
    const half = 2 ** (n - 1);
    if (r < half && c < half) return solution(n - 1, r, c);
    if (r < half && c >= half) return half * half + solution(n - 1, r, c - half);
    if (r >= half && c < half) return 2 * half * half + solution(n - 1, r - half, c);
    return 3 * half * half + solution(n - 1, r - half, c - half);
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, r, c] = input[0].split(" ").map(Number);
console.log(solution(N, r, c));
