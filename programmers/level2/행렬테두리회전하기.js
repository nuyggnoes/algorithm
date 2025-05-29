function solution(rows, columns, queries) {
    const matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );
    const answer = [];
    for (const [x1, y1, x2, y2] of queries) {
        const tmp = matrix[x1 - 1][y1 - 1];
        let min = tmp;

        for (let i = x1 - 1; i < x2 - 1; i++) {
            matrix[i][y1 - 1] = matrix[i + 1][y1 - 1];
            min = Math.min(min, matrix[i][y1 - 1]);
        }

        for (let i = y1 - 1; i < y2 - 1; i++) {
            matrix[x2 - 1][i] = matrix[x2 - 1][i + 1];
            min = Math.min(min, matrix[x2 - 1][i]);
        }

        for (let i = x2 - 1; i > x1 - 1; i--) {
            matrix[i][y2 - 1] = matrix[i - 1][y2 - 1];
            min = Math.min(min, matrix[i][y2 - 1]);
        }

        for (let i = y2 - 1; i > y1; i--) {
            matrix[x1 - 1][i] = matrix[x1 - 1][i - 1];
            min = Math.min(min, matrix[x1 - 1][i]);
        }

        matrix[x1 - 1][y1] = tmp;

        answer.push(min);
    }

    return answer;
}

const rows = 6;
const columns = 6;
const queries = [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
];
console.log(solution(rows, columns, queries)); // [8, 10, 25]
