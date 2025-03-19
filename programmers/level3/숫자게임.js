function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    while (B.length !== 0) {
        let cardA = A.at(-1);
        let cardB = B.at(-1);
        if (cardB > cardA) {
            A.pop();
            B.pop();
            answer++;
        } else {
            B.pop();
        }
    }
    return answer;
}

const testcase1 = {
    A: [5, 1, 3, 7],
    B: [2, 2, 6, 8],
}; // 3
const testcase2 = {
    A: [2, 2, 2, 2],
    B: [1, 1, 1, 1],
}; // 0

console.log(solution(testcase1));
