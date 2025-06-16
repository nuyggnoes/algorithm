function solution(stones, k) {
    let left = 1;
    let right = 200_000_000;
    let answer = 0;
    const canCross = (mid) => {
        let count = 0;
        for (const stone of stones) {
            if (stone < mid) {
                count++;
                if (count >= k) return false;
            } else {
                count = 0;
            }
        }
        return true;
    };
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canCross(mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}

const stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
const k = 3;
console.log(solution(stones, k)); // 3
