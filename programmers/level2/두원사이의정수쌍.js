function solution(r1, r2) {
    let answer = 0;
    for (let x = -r2; x <= r2; x++) {
        const x2 = x * x;
        const maxY2 = r2 * r2 - x2;
        const minY2 = Math.max(0, r1 * r1 - x2);

        if (maxY2 < 0) continue;

        const yMax = Math.floor(Math.sqrt(maxY2));
        const yMin = Math.ceil(Math.sqrt(minY2));

        answer += (yMax - yMin + 1) * 2;
    }

    for (let x = -r2; x <= r2; x++) {
        const x2 = x * x;
        if (r1 * r1 <= x2 && x2 <= r2 * r2) {
            answer--;
        }
    }

    return answer;
}

const r1 = 2;
const r2 = 3;
console.log(solution(r1, r2));
