function solution(keymap, targets) {
    const map = new Map();
    for (const keys of keymap) {
        const keyArr = [...keys];
        for (let i = 0; i < keyArr.length; i++) {
            const key = keyArr[i];
            if (!map.get(key)) map.set(key, i + 1);
            else {
                map.set(keyArr[i], Math.min(i + 1, map.get(keyArr[i])));
            }
        }
    }
    const answer = [];
    for (const target of targets) {
        const wordArr = [...target];
        let sum = 0;
        for (const char of wordArr) {
            if (!map.get(char)) {
                sum = -1;
                break;
            }
            sum += map.get(char);
        }
        answer.push(sum);
    }
    return answer;
}

const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];
console.log(solution(keymap, targets));
