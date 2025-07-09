function solution(begin, end) {
    const answer = [];

    for (let i = begin; i <= end; i++) {
        if (i === 1) {
            answer.push(0);
            continue;
        }

        let maxDivisor = 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j <= 10000000) {
                    maxDivisor = i / j;
                    break;
                } else {
                    maxDivisor = j;
                }
            }
        }
        answer.push(maxDivisor);
    }
    return answer;
}
const begin = 1;
const end = 10;
console.log(solution(begin, end));
// [0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
