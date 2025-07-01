function solution(k, d) {
    let answer = 0;
    for (let x = 0; x <= d; x += k) {
        const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2));
        answer += Math.floor(maxY / k) + 1;
    }
    return answer;
}

const k = 2;
const d = 4;
console.log(solution(k, d));
