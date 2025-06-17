/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};

const m = 3;
const n = 2;
// console.log(uniquePaths(m, n)); // 3

const arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];
const b = arr.map((row) =>
    row.map((e) => {
        if (e === 1) return 0;
        else if (e === 0) return 1;
    })
);
console.log(b);
