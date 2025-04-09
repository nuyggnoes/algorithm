function solution(n, number) {
    const two = [];
    number.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            two.push(number[i] + number[j]);
        }
    }
    two.sort((a, b) => a - b);
    function binarySearch(value) {
        let start = 0;
        let end = n * n - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (value === two[mid]) return true;
            else if (value > two[mid]) start = mid + 1;
            else if (value < two[mid]) end = mid - 1;
        }
        return false;
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            if (binarySearch(number[i] - number[j])) {
                return number[i];
            }
        }
    }
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, ...NUMBER] = input.map(Number);
console.log(solution(N, NUMBER));
