function solution({ n, words }) {
    let answer = [0, 0];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let personNum = (i % n) + 1;
        let turn = Math.ceil((i + 1) / n);
        if (i > 0) {
            let lastAlpha = words[i - 1].split("").pop();
            if (word[0] !== lastAlpha || words.indexOf(word) < i) {
                answer = [personNum, turn];
                break;
            }
        }
    }
    return answer;
}

const testcase1 = {
    n: 3,
    words: ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"],
}; // [3, 3]

const testcase2 = {
    n: 3,
    words: [
        "hello",
        "observe",
        "effect",
        "take",
        "either",
        "recognize",
        "encourage",
        "ensure",
        "establish",
        "hang",
        "gather",
        "refer",
        "reference",
        "estimate",
        "executive",
    ],
}; // [0, 0]

const testcase3 = {
    n: 2,
    words: ["hello", "one", "even", "never", "now", "world", "draw"],
}; // [1, 3]

console.log(solution(testcase1));
