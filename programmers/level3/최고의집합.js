function solution({ n, s }) {
    let answer = new Array(n).fill(Math.floor(s / n));
    if (n > s) return [-1];
    let a = s % n;
    for (let i = 0; i < n; i++) {
        if (a === 0) break;
        answer[n - i - 1]++;
        a--;
    }
    return answer;
}

const testcase1 = {
    n: 2,
    s: 9,
}; // [4, 5]
const testcase2 = {
    n: 2,
    s: 1,
}; // [-1]
const testcase3 = {
    n: 2,
    s: 8,
}; // [4, 4]

console.log(solution(testcase1));
