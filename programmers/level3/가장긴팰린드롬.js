function solution(s) {
    const n = s.length;
    let maxLen = 1;

    const expand = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < n; i++) {
        maxLen = Math.max(maxLen, expand(i, i));
        maxLen = Math.max(maxLen, expand(i, i + 1));
    }
    return maxLen;
}

const s = 'abcdcba';

console.log(solution(s));
