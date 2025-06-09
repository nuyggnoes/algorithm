/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const lowerBound = () => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                if (nums[mid] === target) result = mid;
                right = mid - 1;
            }
        }
        return result;
    };
    const upperBound = () => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                if (nums[mid] === target) result = mid;
                left = mid + 1;
            }
        }
        return result;
    };
    return [lowerBound(), upperBound()];
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target)); // [3, 4]
