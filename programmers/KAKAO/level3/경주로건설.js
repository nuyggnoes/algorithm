function solution(board) {
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const N = board[0].length;
    const costBoard = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => Array(4).fill(Infinity))
    );
    const queue = [];
    if (board[0][1] === 0) {
        queue.push([0, 1, 0, 100]);
        costBoard[0][1][0] = 100;
    }
    if (board[1] && board[1][0] === 0) {
        queue.push([1, 0, 1, 100]);
        costBoard[1][0][1] = 100;
    }
    while (queue.length > 0) {
        const [x, y, dir, cost] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const [dx, dy] = dirs[i];
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= N || ny >= N || board[nx][ny] === 1)
                continue;
            const newCost = cost + (dir === i ? 100 : 600);
            if (costBoard[nx][ny][i] > newCost) {
                costBoard[nx][ny][i] = newCost;
                queue.push([nx, ny, i, newCost]);
            }
        }
    }
    return Math.min(...costBoard[N - 1][N - 1]);
}

const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
console.log(solution(board));
