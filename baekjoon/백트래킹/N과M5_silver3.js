function solution(n, m, numbers) {
    const answer = [];
    const visited = Array(n).fill(false);
    const recursion = (index, arr = []) => {
        if (index === m) {
            answer.push([...arr]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                arr.push(numbers[i]);
                recursion(index + 1, arr);
                arr.pop();
                visited[i] = false;
            }
        }
    };
    recursion(0);
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => +e);
const NUMBER = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
console.log(solution(N, M, NUMBER));
