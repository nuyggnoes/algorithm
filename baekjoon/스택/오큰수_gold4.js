const input = require('fs')
    .readFileSync('example.txt')
    .toString()
    .trim()
    .split('\n');
const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);

function solution(N, arr) {
    const stack = [arr[N - 1]];
    const answer = [-1];

    for (let i = N - 2; i >= 0; i--) {
        const current = arr[i];
        while (stack.length && stack[stack.length - 1] <= current) {
            stack.pop();
        }
        if (stack.length === 0) {
            answer.push(-1);
        } else {
            answer.push(stack[stack.length - 1]);
        }
        stack.push(current);
    }
    return answer.reverse().join(' ');
}

function solution2(N, arr) {
    const stack = [];
    const answer = Array(N).fill(-1);

    for (let i = 0; i < N; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            const idx = stack.pop();
            answer[idx] = arr[i];
        }
        stack.push(i);
    }
    return answer.join(' ');
}

console.log(solution(N, arr));
console.log(solution2(N, arr));
