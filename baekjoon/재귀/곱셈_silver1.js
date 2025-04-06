function Pow(a, b, c) {
    if (b === 0n) return 1;
    if (b === 1n) return a % c;
    let val = Pow(a, BigInt(b / 2n), c);
    val = (val * val) % c;
    if (b % 2n === 0n) return val;
    return (val * a) % c;
}
let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [A, B, C] = input[0].split(" ").map(BigInt);
console.log(parseInt(Pow(A, B, C)));
