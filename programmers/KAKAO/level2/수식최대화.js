function solution(expression) {
    function getPermutation(arr) {
        const result = [];
        const visited = Array(arr.length).fill(false);
        const dfs = (path = []) => {
            if (path.length === arr.length) {
                result.push([...path]);
                return;
            }
            for (let i = 0; i < arr.length; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    path.push(arr[i]);
                    dfs(path);
                    path.pop();
                    visited[i] = false;
                }
            }
        };
        dfs();
        return result;
    }
    const tokens = [];
    let num = "";
    for (let char of expression) {
        if ("+-*".includes(char)) {
            tokens.push(Number(num));
            tokens.push(char);
            num = "";
        } else {
            num += char;
        }
    }
    tokens.push(Number(num));
    const operator = [...new Set(tokens.filter((e) => typeof e === "string"))];
    const permutations = getPermutation(operator);
    let maxResult = 0;
    for (const ops of permutations) {
        let tmpTokens = [...tokens];
        for (const op of ops) {
            let newToken = [];
            for (let i = 0; i < tokens.length; i++) {
                if (tmpTokens[i] === op) {
                    const a = newToken.pop();
                    const b = tmpTokens[i + 1];
                    let res = 0;
                    if (op === "+") res = a + b;
                    else if (op === "-") res = a - b;
                    else if (op === "*") res = a * b;
                    newToken.push(res);
                    i++;
                } else {
                    newToken.push(tmpTokens[i]);
                }
            }
            tmpTokens = newToken;
        }
        maxResult = Math.max(maxResult, Math.abs(tmpTokens[0]));
    }
    return maxResult;
}

const expression = "100-200*300-500+20";
console.log(solution(expression)); // 60420
