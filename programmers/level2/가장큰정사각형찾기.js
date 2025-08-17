function solution(board) {
    const row = board.length;
    const col = board[0].length;

    const dp = Array.from({ length: row }, () => Array(col).fill(0));
    let maxLen = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = board[i][j];
            } else if (board[i][j] === 1) {
                dp[i][j] =
                    Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }

            maxLen = Math.max(maxLen, dp[i][j]);
        }
    }
    return maxLen * maxLen;
}

const board = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
];
console.log(solution(board));
