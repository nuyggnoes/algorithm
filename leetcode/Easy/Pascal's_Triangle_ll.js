/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    const triangle = [];
    for (let i = 0; i <= rowIndex; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
};

const rowIndex = 3;
console.log(getRow(rowIndex)); // [1, 3, 3, 1]
