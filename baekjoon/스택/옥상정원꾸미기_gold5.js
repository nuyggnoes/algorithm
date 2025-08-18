const input = require('fs')
    .readFileSync('example.txt')
    .toString()
    .trim()
    .split('\n');
const N = Number(input.shift());
const heights = input.map(Number);

function solution(N, heights) {
    const stack = [];
    let answer = 0;

    for (let i = 0; i < N; i++) {
        const currentHeight = heights[i];

        while (stack.length > 0 && stack[stack.length - 1] <= currentHeight) {
            stack.pop();
        }

        answer += stack.length;

        stack.push(currentHeight);
    }
    return answer;
}

console.log(solution(N, heights));
