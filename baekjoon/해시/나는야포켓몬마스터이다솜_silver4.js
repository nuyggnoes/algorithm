function solution(n, m, pocketMon, quiz) {
    const answer = [];
    const NumToName = new Map();
    const NameToNum = new Map();
    for (let i = 0; i < n; i++) {
        NumToName.set(i + 1, pocketMon[i]);
        NameToNum.set(pocketMon[i], i + 1);
    }
    quiz.forEach((q) => {
        if (isNaN(q)) {
            answer.push(NameToNum.get(q));
        } else {
            answer.push(NumToName.get(+q));
        }
    });
    return answer;
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
const pocketMon = input.splice(0, N);
const quiz = input.slice();
console.log(solution(N, M, pocketMon, quiz).join("\n"));
