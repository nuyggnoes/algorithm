/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
    const n = s.length;
    const dp = Array(n).fill(0);
    let maxLen = 0;

    for (let i = 1; i < n; i++) {
        if (s[i] === ")") {
            if (s[i - 1] === "(") {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (s[i - 1] === ")" && s[i - dp[i - 1] - 1] === "(") {
                dp[i] =
                    dp[i - 1] +
                    2 +
                    (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
    }
    console.log(dp);
    return maxLen;
};

const s = "()(())";
console.log(longestValidParentheses(s));
