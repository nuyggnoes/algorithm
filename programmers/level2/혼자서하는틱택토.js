function solution(board) {
    const map = board.map((e) => e.split(''));
    let oCount = 0,
        xCount = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (map[i][j] === 'O') oCount++;
            if (map[i][j] === 'X') xCount++;
        }
    }

    if (xCount > oCount || oCount - xCount > 1) return 0;

    const win = (player) => {
        for (let i = 0; i < 3; i++) {
            if (
                map[i][0] === player &&
                map[i][1] === player &&
                map[i][2] === player
            )
                return true;
            if (
                map[0][i] === player &&
                map[1][i] === player &&
                map[2][i] === player
            )
                return true;
        }
        if (
            map[0][0] === player &&
            map[1][1] === player &&
            map[2][2] === player
        )
            return true;
        if (
            map[0][2] === player &&
            map[1][1] === player &&
            map[2][0] === player
        )
            return true;
        return false;
    };

    const oWin = win('O');
    const xWin = win('X');

    if (oWin && xWin) return 0;
    if (oWin && oCount !== xCount + 1) return 0;
    if (xWin && oCount !== xCount) return 0;

    return 1;
}

const board = ['O.X', '.O.', '..X'];
const board2 = ['OOX', 'OOX', 'XX.'];
const board3 = ['OO.', '...', 'XXX'];
console.log(solution(board3));
