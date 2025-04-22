function solution(s) {
    let answer = [];
    const newS = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]")).sort(
        (a, b) => a.length - b.length
    );
    answer.push(...newS.shift());
    for (let i = 0; i < newS.length; i++) {
        let answerSet = new Set(answer);
        let checkSet = new Set(newS[i]);
        answer.push(...[...checkSet].filter((num) => !answerSet.has(num)));
    }
    return answer;
}
const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
console.log(solution(s));
