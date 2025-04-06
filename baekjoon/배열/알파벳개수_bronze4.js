let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const S = input.shift();
const frequency = new Array(26).fill(0);
for (let i = 0; i < S.length; i++) {
    const charCode = S.charCodeAt(i);
    const index = charCode - 97;
    frequency[index]++;
}
console.log(frequency.join(" "));
