/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let searchIncludeRowIndex = 0;
    while (
        searchIncludeRowIndex < m &&
        matrix[searchIncludeRowIndex][n - 1] < target
    ) {
        searchIncludeRowIndex++;
    }
    if (searchIncludeRowIndex === m) return false;

    const includeRow = matrix[searchIncludeRowIndex];

    let left = 0;
    let right = n - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (includeRow[mid] === target) return true;
        if (includeRow[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

const matrix = [[1]];
const target = 1;
console.log(searchMatrix(matrix, target)); // true
