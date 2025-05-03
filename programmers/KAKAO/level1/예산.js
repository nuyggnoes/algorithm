function solution(d, budget) {
    d.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    for (; i < d.length; i++) {
        if (sum + d[i] <= budget) {
            sum += d[i];
        } else break;
    }
    return i;
}
const d = [2, 2, 3, 3];
const budget = 10;
console.log(solution(d, budget));
