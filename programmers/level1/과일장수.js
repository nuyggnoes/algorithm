function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let answer = 0;

    for (let i = 0; i + m <= score.length; i += m) {
        answer += score[i + m - 1] * m;
    }

    return answer;
}

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
console.log(solution(k, m, score));
