let input = require('fs')
    .readFileSync('example.txt')
    .toString()
    .trim()
    .split('\n');
const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);

function solution(N, arr) {
    const stack = [];
    const answer = [];

    for (let i = 0; i < N; i++) {
        const currentHeight = arr[i];
        while (stack.length && stack[stack.length - 1][0] < currentHeight) {
            stack.pop();
        }
        if (stack.length === 0) {
            answer.push(0);
        } else {
            answer.push(stack[stack.length - 1][1]);
        }
        stack.push([currentHeight, i + 1]);
    }
    return answer.join(' ');
}
console.log(solution(N, arr));
