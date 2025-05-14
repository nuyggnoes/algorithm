function solution(n, info) {
    let maxDiff = -1;
    let answer = [];

    function dfs(idx, arrowLeft, ryanInfo) {
        if (idx === 11) {
            if (arrowLeft > 0) ryanInfo[10] += arrowLeft;

            let ryanScore = 0;
            let apeachScore = 0;

            for (let i = 0; i < 11; i++) {
                if (info[i] === 0 && ryanInfo[i] === 0) continue;
                if (ryanInfo[i] > info[i]) ryanScore += 10 - i;
                else apeachScore += 10 - i;
            }
            const diff = ryanScore - apeachScore;
            if (diff > 0) {
                if (diff > maxDiff) {
                    maxDiff = diff;
                    answer = [...ryanInfo];
                } else if (diff === maxDiff) {
                    for (let i = 10; i >= 0; i--) {
                        if (ryanInfo[i] > answer[i]) {
                            answer = [...ryanInfo];
                            break;
                        } else if (ryanInfo[i] < answer[i]) {
                            break;
                        }
                    }
                }
            }
            if (arrowLeft > 0) ryanInfo[10] -= arrowLeft;
            return;
        }
        if (arrowLeft > info[idx]) {
            ryanInfo[idx] = info[idx] + 1;
            dfs(idx + 1, arrowLeft - (info[idx] + 1), ryanInfo);
            ryanInfo[idx] = 0;
        }
        dfs(idx + 1, arrowLeft, ryanInfo);
    }
    dfs(0, n, Array(11).fill(0));
    return maxDiff === -1 ? [-1] : answer;
}

const n = 5;
const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
console.log(solution(n, info)); // [0,2,2,0,1,0,0,0,0,0,0]

/*
1	[1,0,0,0,0,0,0,0,0,0,0] => [-1]
*/
