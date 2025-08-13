/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let left = 0;
    let sum = 0;
    let answer = Infinity;

    for (let right = 0; right < n; right++) {
        sum += nums[right];

        while (sum >= target) {
            answer = Math.min(answer, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return answer === Infinity ? 0 : answer;
};

console.log(
    minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12])
);
