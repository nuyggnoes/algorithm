function solution(cookies) {
    let answer = 0;
    for (let start = 0; start < cookies.length; start++) {
        let left = start;
        let right = start + 1;
        let leftSum = cookies[left];
        let rightSum = cookies[right];

        while (right < cookies.length) {
            while (left >= 0 && leftSum < rightSum) {
                left--;
                if (left >= 0) leftSum += cookies[left];
            }
            if (leftSum === rightSum) answer = Math.max(answer, leftSum);
            if (left < 0 && leftSum < rightSum) break;
            right++;
            rightSum += cookies[right];
        }
    }
    return answer;
}

const cookie = [1, 1, 2, 3];
console.log(solution(cookie)); // 3
