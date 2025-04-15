function solution(str, target) {
    const failure = (s) => {
        const f = Array(s.length).fill(0);
        let j = 0;
        for (let i = 1; i < s.length; i++) {
            while (j > 0 && s[i] !== s[j]) j = f[j - 1];
            if (s[i] === s[j]) f[i] = ++j;
        }
        return f;
    };
    const targetFailure = failure(target);
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        while (j > 0 && str[i] !== target[j]) j = targetFailure[j - 1];
        if (str[i] === target[j]) j++;
        if (j === target.length) return 1;
    }
    return 0;
}
// 시간초과
// function solution(str, target) {
//     if (str.includes(target)) return 1;
//     return 0;
// }

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [STR, TARGET] = input;
console.log(solution(STR, TARGET));
