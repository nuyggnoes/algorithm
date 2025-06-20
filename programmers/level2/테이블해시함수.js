function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) return b[0] - a[0];
        return a[col - 1] - b[col - 1];
    });

    const result = [];
    for (let i = row_begin - 1; i < row_end; i++) {
        let sum = 0;
        for (let j = 0; j < data[i].length; j++) {
            sum += data[i][j] % (i + 1);
        }
        result.push(sum);
    }

    return result.reduce((acc, cur) => acc ^ cur, 0);
}

const data = [
    [2, 2, 6],
    [1, 5, 10],
    [4, 2, 9],
    [3, 8, 3],
];
const col = 2;
const row_begin = 2;
const row_end = 3;
console.log(solution(data, col, row_begin, row_end)); // 4
