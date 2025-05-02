function solution(board, moves) {
    let answer = 0;
    let N = board[0].length;
    let stack = [];
    moves.forEach((line) => {
        line--;
        for (let i = 0; i < N; i++) {
            if (board[i][line] === 0) continue;
            else {
                if (stack && stack.at(-1) === board[i][line]) {
                    stack.pop();
                    answer += 2;
                    board[i][line] = 0;
                    break;
                }
                stack.push(board[i][line]);
                board[i][line] = 0;
                break;
            }
        }
    });

    return answer;
}
const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
