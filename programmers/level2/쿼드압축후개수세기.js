function solution(arr) {
    const answer = [0, 0];

    function compress(x, y, size) {
        const target = arr[x][y];
        let isSame = true;

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== target) {
                    isSame = false;
                    break;
                }
            }
            if (!isSame) break;
        }
        if (isSame) {
            answer[target]++;
        } else {
            const newSize = size / 2;
            compress(x, y, newSize);
            compress(x, y + newSize, newSize);
            compress(x + newSize, y, newSize);
            compress(x + newSize, y + newSize, newSize);
        }
    }
    compress(0, 0, arr.length);
    return answer;
}

const arr = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
];
console.log(solution(arr));
