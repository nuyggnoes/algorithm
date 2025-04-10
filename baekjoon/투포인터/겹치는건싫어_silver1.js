function solution(n, k, arr) {
    let answer = 0;
    let end = 0;
    const count = new Map();
    for (let start = 0; start < n; start++) {
        while (end < n) {
            if (!count.has(arr[end])) {
                count.set(arr[end], 1);
                end++;
            } else {
                if (count.get(arr[end]) > k - 1) break;
                count.set(arr[end], count.get(arr[end]) + 1);
                end++;
            }
        }
        answer = Math.max(answer, end - start);
        count.set(arr[start], count.get(arr[start]) - 1);
        if (count.get(arr[start]) === 0) count.delete(arr[start]);
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const ARR = input.shift().split(" ").map(Number);
console.log(solution(N, K, ARR));
