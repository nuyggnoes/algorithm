function solution(sequence) {
    let answer = 0;
    const dpPositive = [];
    const dpNegative = [];

    for (let i = 0; i < sequence.length; i++) {
        const s = sequence[i];

        if (i === 0) {
            dpPositive.push(s);
            dpNegative.push(-s);
        } else if (i % 2 === 0) {
            dpPositive.push(Math.max(dpPositive[i - 1] + s, s));
            dpNegative.push(Math.max(dpNegative[i - 1] - s, -s));
        } else {
            dpPositive.push(Math.max(dpPositive[i - 1] - s, -s));
            dpNegative.push(Math.max(dpNegative[i - 1] + s, s));
        }
        answer = Math.max(answer, dpNegative[i], dpPositive[i]);
    }
    return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
