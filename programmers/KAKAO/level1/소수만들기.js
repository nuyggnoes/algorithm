function solution(nums) {
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const peekThreeNumberSum = (nums) => {
        const result = [];
        function backtrack(start, path) {
            if (path.length === 3) {
                const sum = path.reduce((pre, cur) => pre + cur, 0);
                result.push(sum);
                return;
            }
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        }
        backtrack(0, []);
        return result;
    };
    const result = peekThreeNumberSum(nums);
    let answer = 0;
    for (const number of result) {
        if (isPrime(number)) answer++;
    }
    return answer;
}
const nums = [1, 2, 3, 4];
const nums2 = [1, 2, 7, 6, 4];
console.log(solution(nums));
