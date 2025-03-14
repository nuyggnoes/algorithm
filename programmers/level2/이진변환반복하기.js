function solution(s) {
    let answer = [0, 0];
    let sLen = 0;
    while (s.length > 1) {
        sLen = s.length;
        s = s.split("0").join("");
        answer[0]++;
        answer[1] += sLen - s.length;
        s = s.length.toString(2);
    }
    return answer;
}
const testcase1 = "110010101001"; // [3, 8]
const testcase2 = "01110"; // [3, 3]
const testcase3 = "1111111"; // [4, 1]

console.log(solution(testcase1));
