function isValid(str) {
    let aeiouCount = 0;
    let otherCount = 0;
    for (const char of str.toLowerCase()) {
        if (!/[a-z]/.test(char)) continue;
        if ("aeiou".includes(char)) {
            aeiouCount++;
        } else {
            otherCount++;
        }
    }
    return aeiouCount >= 1 && otherCount >= 2;
}
function solution(L, C, ALPHA) {
    const answer = [];
    const recursion = (start, arr = []) => {
        if (arr.length === L) {
            const str = arr.join("");
            if (isValid(str)) answer.push(str);
            return;
        }
        for (let i = start; i < C; i++) {
            arr.push(ALPHA[i]);
            recursion(i + 1, arr);
            arr.pop();
        }
    };
    recursion(0);
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [L, C] = input.shift().split(" ").map(Number);
const ALPHA = input.shift().split(" ").sort();
console.log(solution(L, C, ALPHA).join("\n"));
