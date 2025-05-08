function solution(diffs, times, limit) {
    let [left, right] = [1, 1];
    diffs.forEach((item) => {
        if (right < item) right = item;
    });
    let answer = right;
    function canSolveAll(level) {
        let totalTime = 0;
        for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] <= level) {
                totalTime += times[i];
            } else {
                const failCount = diffs[i] - level;
                const retryTime = (i > 0 ? times[i - 1] : 0) + times[i];
                totalTime += retryTime * failCount + times[i];
            }
            if (totalTime > limit) return false;
        }
        return true;
    }
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canSolveAll(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}

const diffs = [1, 5, 3];
const times = [2, 4, 7];
const limit = 30;
console.log(solution(diffs, times, limit)); // 3
