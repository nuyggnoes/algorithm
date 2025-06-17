/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
    const n = s.length;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === "0" ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        const one = +s.slice(i - 1, i);
        const two = +s.slice(i - 2, i);

        if (1 <= one && one <= 9) dp[i] += dp[i - 1];
        if (10 <= two && two <= 26) dp[i] += dp[i - 2];
    }
    console.log(dp);
    return dp[n];
};

const s = "11106";
console.log(numDecodings(s));
