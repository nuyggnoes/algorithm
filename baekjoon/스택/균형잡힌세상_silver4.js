function solution(strArr) {
    const answer = [];

    for (const str of strArr) {
        if (str === ".") break;
        const stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(" || str[i] === "[") {
                stack.push(str[i]);
            } else if (str[i] === ")") {
                if (stack.at(-1) === "(") stack.pop();
                else stack.push(")");
            } else if (str[i] === "]") {
                if (stack.at(-1) === "[") stack.pop();
                else stack.push("]");
            }
        }
        stack.length ? answer.push("no") : answer.push("yes");
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
console.log(solution(input).join("\n"));
