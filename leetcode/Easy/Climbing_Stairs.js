/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    if (n <= 2) return n;
    const dp = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

const n = 3;
console.log(climbStairs(n));
