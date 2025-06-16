function solution(n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        answer.push(Math.max(row, col) + 1);
    }
    return answer;
}
const n = 3;
const left = 2;
const right = 5;
console.log(solution(n, left, right));
