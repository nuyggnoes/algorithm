function solution(a) {
    const n = a.length;
    if (n <= 2) return n;

    const leftMin = Array(n).fill(Infinity);
    const rightMin = Array(n).fill(Infinity);

    let min = a[0];
    for (let i = 1; i < n; i++) {
        leftMin[i] = min;
        min = Math.min(min, a[i]);
    }

    min = a[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = min;
        min = Math.min(min, a[i]);
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] < leftMin[i] || a[i] < rightMin[i]) {
            count++;
        }
    }

    return count;
}

const a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];
console.log(solution(a));
