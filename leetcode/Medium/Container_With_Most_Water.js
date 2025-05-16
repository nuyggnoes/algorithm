/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        max = Math.max(max, h * w);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 9
console.log(maxArea(height));
