function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"];
    const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    for (let i = 0; i < survey.length; i++) {
        const [a, b] = survey[i];
        const choice = choices[i];
        if (choice < 4) {
            score[a] += 4 - choice;
        } else if (choice > 4) {
            score[b] += choice - 4;
        }
    }
    return types.map(([a, b]) => (score[a] >= score[b] ? a : b)).join("");
}
const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));
