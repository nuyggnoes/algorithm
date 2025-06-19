function solution(n, m, section) {
    let answer = 0;
    const board = Array(n).fill(true);
    for (const s of section) {
        board[s - 1] = false;
    }
    for (let i = n - 1; i >= 0; i--) {
        if (board[i] === false) {
            for (let j = i; j > i - m && j >= 0; j--) {
                board[j] = true;
            }
            answer++;
        }
    }
    return answer;
}

const n = 8;
const m = 4;
const section = [2, 3, 6];
console.log(solution(n, m, section));
