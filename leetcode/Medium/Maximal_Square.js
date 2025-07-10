/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
    let maxLength = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) dp[i][j] = 1;
                else {
                    dp[i][j] =
                        1 +
                        Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                }
                maxLength = Math.max(maxLength, dp[i][j]);
            }
        }
    }
    return maxLength * maxLength;
};

const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
];
console.log(maximalSquare(matrix));
