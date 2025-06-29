function solution(k, ranges) {
    const prefixSum = [0];
    let x = k;
    while (x !== 1) {
        const nextX = x % 2 ? x * 3 + 1 : x / 2;
        prefixSum.push(prefixSum[prefixSum.length - 1] + (x + nextX) / 2);
        x = nextX;
    }

    return ranges.map(([a, b]) => {
        if (a >= prefixSum.length || -b >= prefixSum.length) return -1;
        const area = prefixSum[prefixSum.length - 1 + b] - prefixSum[a];
        if (area < 0) return -1;
        return area;
    });
}

const k = 5;
const ranges = [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
];
console.log(solution(k, ranges));
