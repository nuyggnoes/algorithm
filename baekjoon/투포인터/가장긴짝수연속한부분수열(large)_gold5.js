// 나의 풀이
// 조건문이 많아서 가독성이 좋지 않다.
function solution(n, k, number) {
    let answer = 0;
    let end = 0;
    let oddCount = 0;
    for (let start = 0; start < n; start++) {
        while (end < n && oddCount <= k) {
            if (oddCount === k && number[end] % 2 === 1) break;
            if (number[end] % 2 === 1) oddCount++;
            end++;
        }
        answer = Math.max(answer, end - start - oddCount);
        if (number[start] % 2 === 1) oddCount--;
    }
    return answer;
}

// 다른 풀이
// 매우 깔끔하다.
function otherSolution(n, k, arr) {
    let start = 0;
    let end = 0;
    let odd = 0;
    let maxLen = 0;
    while (end < n) {
        if (arr[end] % 2 === 1) odd++; // 홀수면 제거 대상 증가
        // 홀수 개수가 K 초과되면 start 이동 (슬라이딩)
        while (odd > k) {
            if (arr[start] % 2 === 1) odd--;
            start++;
        }
        // 현재 구간의 길이에서 홀수 개수를 제외한 짝수 개수만큼 길이 세기
        maxLen = Math.max(maxLen, end - start + 1 - odd);
        end++;
    }
    return maxLen;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const NUMBER = input.shift().split(" ").map(Number);
console.log(solution(N, K, NUMBER));
