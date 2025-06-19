function solution(weights) {
    const combinations = [
        [1, 1],
        [2, 3],
        [3, 2],
        [2, 4],
        [4, 2],
        [3, 4],
        [4, 3],
    ];
    const map = new Map();
    let answer = 0;

    for (const weight of weights) {
        for (const [a, b] of combinations) {
            const target = (weight * a) / b;
            if (map.has(target)) {
                answer += map.get(target);
            }
        }
        map.set(weight, (map.get(weight) || 0) + 1);
    }
    return answer;
}
const weights = [100, 180, 360, 100, 270];
console.log(solution(weights));
