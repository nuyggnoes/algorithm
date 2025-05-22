function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let d = 0;
    let p = 0;
    for (let i = n - 1; i >= 0; i--) {
        d += deliveries[i];
        p += pickups[i];
        while (d > 0 || p > 0) {
            d -= cap;
            p -= cap;
            answer += (i + 1) * 2;
        }
    }
    return answer;
}

const cap = 4;
const n = 5;
const deliveries = [1, 0, 3, 1, 2];
const pickups = [0, 3, 0, 4, 0];
console.log(solution(cap, n, deliveries, pickups)); // 16
