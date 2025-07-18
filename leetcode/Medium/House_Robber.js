/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    const n = nums.length;
    const dp = Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[n - 1];
};

const nums = [1, 2, 3, 1];
console.log(rob(nums)); // 4
