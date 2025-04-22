function solution(s) {
    const NUMBER = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let answer = "";
    let english = "";
    for (const char of s) {
        console.log(char);
        if (Number.isInteger(+char)) {
            answer += char;
        } else {
            english += char;
            for (let i = 0; i < NUMBER.length; i++) {
                if (english === NUMBER[i]) {
                    answer += i.toString();
                    english = "";
                }
            }
        }
    }
    return parseInt(answer);
}

const s = "one4seveneight";
const s2 = "23four5six7";
const s3 = "2three45sixseven";
console.log(solution(s));
