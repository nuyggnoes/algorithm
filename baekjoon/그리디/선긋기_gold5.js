function solution(n, coords) {
    coords.sort((a, b) => a[0] - b[0]);
    let start = coords[0][0];
    let end = coords[0][1];
    let len = 0;
    for (let i = 1; i < n; i++) {
        console.log("start,end:", start, end);
        const [x, y] = coords[i];
        if (x > end) {
            len += end - start;
            console.log("len", len);
            start = x;
            end = y;
        }
        if (y > end) {
            end = y;
        }
    }
    len += end - start;
    return len;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const COORDS = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, COORDS));
