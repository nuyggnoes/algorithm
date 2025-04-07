function generateCombinations(arr, r = 6) {
    const result = [];
    function backtrack(start, comb = []) {
        if (comb.length === r) {
            result.push(comb.join(" "));
            return;
        }
        for (let i = start; i < arr.length; i++) {
            comb.push(arr[i]);
            backtrack(i + 1, comb);
            comb.pop();
        }
    }
    backtrack(0);
    return result;
}

function solution(lottos) {
    for (const lotto of lottos) {
        const [k, ...arr] = lotto;
        const result = generateCombinations(arr, 6);
        console.log(result.join("\n"));
        console.log("");
    }
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
input.pop();
const S = input.map((e) => e.split(" ").map(Number));
solution(S);
