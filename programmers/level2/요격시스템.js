function solution(targets) {
    targets.sort((a, b) => a[1] - b[1]);
    let answer = 0;
    let last = -Infinity;

    for (const [start, end] of targets) {
        if (last <= start) {
            answer++;
            last = end;
        }
    }
    return answer;
}

const targets = [
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
];

console.log(solution(targets));
