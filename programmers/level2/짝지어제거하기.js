function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length > 0 ? 0 : 1;
}

const testcase1 = "baabaa"; // 1
const testcase2 = "cdcd"; // 0
console.log(solution(testcase2));
