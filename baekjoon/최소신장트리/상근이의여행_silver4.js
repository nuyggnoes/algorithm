// 뭐하자는거지
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
let T = Number(input.shift());
const output = [];
while (T-- > 0) {
    const [N, M] = input.shift().split(" ").map(Number);
    const INFO = input.splice(0, M).map((e) => e.split(" ").map(Number));
    output.push(N - 1);
}
console.log(output.join("\n"));
