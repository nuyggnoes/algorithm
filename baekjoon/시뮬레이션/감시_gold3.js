function solution(n, m, board) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const CCTV_DIRECTION = [
        [],
        [[0], [1], [2], [3]],
        [
            [0, 2],
            [1, 3],
        ],
        [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
        ],
        [
            [0, 1, 2],
            [1, 2, 3],
            [2, 3, 0],
            [3, 0, 1],
        ],
        [[0, 1, 2, 3]],
    ];
    const cctv = [];
    let zeroCount = 0;
    let blindZone = Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 0) zeroCount++;
            if (board[i][j] >= 1 && board[i][j] <= 5)
                cctv.push([i, j, board[i][j]]);
        }
    }
    const watchCCTV = (tmpBoard, x, y, d) => {
        let nx = x;
        let ny = y;
        let count = 0;
        while (true) {
            nx += dx[d];
            ny += dy[d];
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) break;
            if (tmpBoard[nx][ny] === 6) break;
            if (tmpBoard[nx][ny] === 0) {
                tmpBoard[nx][ny] = "*";
                count++;
            }
        }
        return count;
    };

    const dfs = (copyBoard, depth, cctvZoneCount) => {
        if (depth === cctv.length) {
            blindZone = Math.min(blindZone, zeroCount - cctvZoneCount);
            return;
        }
        const [x, y, type] = cctv[depth];
        for (const dir of CCTV_DIRECTION[type]) {
            let count = 0;
            const newBoard = copyBoard.map((row) => [...row]);
            for (const d of dir) {
                count += watchCCTV(newBoard, x, y, d);
            }
            dfs(newBoard, depth + 1, cctvZoneCount + count);
        }
    };
    dfs(board, 0, 0);
    return blindZone;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M] = input.shift().split(" ");
const BOARD = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, BOARD));
