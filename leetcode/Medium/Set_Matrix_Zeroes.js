/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    const zero = {
        row: new Set(),
        col: new Set(),
    };
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zero["row"].add(i);
                zero["col"].add(j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (zero["row"].has(i)) {
                matrix[i][j] = 0;
            } else if (zero["col"].has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};

const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
];
console.log(setZeroes(matrix));
