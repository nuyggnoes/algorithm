function solution(p) {
    if (p.length === 0) return p;
    const splitUV = (p) => {
        let left = 0,
            right = 0;
        let i = 0;
        for (; i < p.length; i++) {
            if (p[i] === "(") left++;
            else right++;
            if (left === right) break;
        }
        const u = p.slice(0, i + 1);
        const v = p.slice(i + 1);
        return [u, v];
    };
    const isPerfect = (p) => {
        const stack = [];
        for (let char of p) {
            if (char === "(") {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                stack.pop();
            }
        }
        return stack.length === 0;
    };
    const [u, v] = splitUV(p);
    if (isPerfect(u)) {
        return u + solution(v);
    } else {
        let newStr = "(" + solution(v) + ")";
        let trimmed = u.slice(1, -1);
        let reversed = "";
        for (let char of trimmed) {
            reversed += char === "(" ? ")" : "(";
        }
        return newStr + reversed;
    }
}

const p = "()))((()";
console.log(solution(p));
//"()(())()"
