/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const dfs = (x, y, idx) => {
        if (idx === word.length) return true;

        if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== word[idx])
            return false;

        const cover = board[x][y];
        board[x][y] = ".";

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (dfs(nx, ny, idx + 1)) {
                board[x][y] = cover;
                return true;
            }
        }

        board[x][y] = cover;
        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
const word = "ABCCED";
console.log(exist(board, word)); // true
