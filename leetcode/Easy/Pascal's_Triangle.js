/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
        }
        triangle.push(row);
    }
    return triangle;
};

const numRows = 5;
console.log(generate(numRows)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
