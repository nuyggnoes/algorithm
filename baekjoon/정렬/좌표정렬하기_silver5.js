function solution(n, coordinates) {
    coordinates.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    console.log(coordinates.map((e) => e.join(" ")).join("\n"));
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const COORDINATE = input.map((item) => item.split(" ").map(Number));

console.log(solution(N, COORDINATE));
