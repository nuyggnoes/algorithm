function solution(s) {
    const sLen = s.length;
    let answer = sLen;
    for (let len = 1; len <= Math.floor(sLen / 2); len++) {
        let str = "";
        let prev = s.slice(0, len);
        let count = 1;

        for (let i = len; i < sLen; i += len) {
            const curr = s.slice(i, i + len);
            if (curr === prev) {
                count++;
            } else {
                str += (count > 1 ? count : "") + prev;
                prev = curr;
                count = 1;
            }
        }
        str += (count > 1 ? count : "") + prev;
        answer = Math.min(answer, str.length);
    }
    return answer;
}
// s <= 1_000
const s = "abcabcabcabcdededededede";
console.log(solution(s)); // 7
