function solution(scores) {
    const wanho = scores[0];
    const wanhoSum = wanho[0] + wanho[1];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i][0] > wanho[0] && scores[i][1] > wanho[1]) {
            return -1;
        }
    }

    scores.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    });

    const incentives = [];
    let maxB = 0;
    for (let i = 0; i < scores.length; i++) {
        const [a, b] = scores[i];
        if (b >= maxB) {
            incentives.push(a + b);
            maxB = Math.max(maxB, b);
        }
    }

    incentives.sort((a, b) => b - a);
    return incentives.findIndex((score) => score === wanhoSum) + 1;
}

const scores = [
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
];
console.log(solution(scores));
