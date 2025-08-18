function solution(s) {
    let answer = 0;
    let same = 0;
    let diff = 0;
    let x = s[0];

    for (let i = 0; i < s.length; i++) {
        if (same === 0) {
            x = s[i];
            same = 1;
            diff = 0;
        } else {
            if (s[i] === x) same++;
            else diff++;
        }

        if (same === diff) {
            answer++;
            same = 0;
        }
    }
    if (same !== 0) answer++;

    return answer;
}

const s = 'banana';
console.log(solution(s));
