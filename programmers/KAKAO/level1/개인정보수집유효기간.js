function solution(today, terms, privacies) {
    const answer = [];
    function getDateObj(str) {
        return new Date(str.replaceAll(".", "-"));
    }
    const nTerms = terms.map((e) => e.split(" "));
    const board = {};
    nTerms.forEach(([type, month]) => {
        board[type] = Number(month);
    });
    const todayDate = getDateObj(today);
    const nPrivacies = privacies.map((e) => e.split(" "));
    nPrivacies.forEach(([date, type], i) => {
        const parsedDate = getDateObj(date);
        parsedDate.setMonth(parsedDate.getMonth() + board[type]);
        parsedDate.setDate(parsedDate.getDate() - 1);
        if (parsedDate < todayDate) {
            answer.push(i + 1);
        }
    });
    return answer;
}

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
    "2021.05.02 A",
    "2021.07.01 B",
    "2022.02.19 C",
    "2022.02.20 C",
];
console.log(solution(today, terms, privacies));
