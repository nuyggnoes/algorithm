function solution(An, Bn, a, b) {
    const result = [];
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    for (const number of a) {
        let left = 0;
        let right = b.length - 1;
        let exist = false;
        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            if (number === b[mid]) {
                exist = true;
                break;
            } else if (number < b[mid]) {
                right = mid - 1;
            } else if (number > b[mid]) {
                left = mid + 1;
            }
        }
        if (!exist) result.push(number);
    }
    return result.length ? [result.length, result.join(" ")] : 0;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [An, Bn] = input.shift().split(" ").map(Number);
const A = input.shift().split(" ").map(Number);
const B = input.shift().split(" ").map(Number);
const output = solution(An, Bn, A, B);
if (Array.isArray(output)) console.log(output.join("\n"));
else console.log(output);
