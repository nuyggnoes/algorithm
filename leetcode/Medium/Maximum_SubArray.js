/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    const n = nums.length;
    const dp = Array(n).fill(0);

    dp[0] = nums[0];
    let max = dp[0];

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        max = Math.max(max, dp[i]);
    }
    console.log(dp);
    return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // 6
