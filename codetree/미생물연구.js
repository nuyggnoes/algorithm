const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, Q] = input.shift().split(" ").map(Number);
const coords = input.map((e) => e.split(" ").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let board = Array.from({ length: N }, () => Array(N).fill(0));
let newBoard = Array.from({ length: N }, () => Array(N).fill(0));
let visited = Array.from({ length: N }, () => Array(N).fill(false));
let idConnectedCount = Array(Q + 1).fill(0);
let virusSize = Array(Q + 1).fill(0);

const isValidBound = (r, c) => r >= 0 && c >= 0 && r < N && c < N;

function findSameId(row, col, id) {
    const queue = [[row, col]];
    let size = 1;
    visited[row][col] = true;
    while (queue.length > 0) {
        const [curRow, curCol] = queue.shift();

        for (let d = 0; d < 4; d++) {
            const [newRow, newCol] = [curRow + dx[d], curCol + dy[d]];
            if (!isValidBound(newRow, newCol)) continue;
            if (visited[newRow][newCol]) continue;
            if (board[newRow][newCol] !== id) continue;
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol]);
            size++;
        }
    }
    virusSize[id] = size;
}

function removeVirus(id) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === id) board[i][j] = 0;
        }
    }
}

function putVirus(id, r1, c1, r2, c2) {
    visited = Array.from({ length: N }, () => Array(N).fill(false));
    idConnectedCount.fill(0);
    for (let row = r1; row < r2; row++) {
        for (let col = c1; col < c2; col++) {
            board[row][col] = id;
        }
    }
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            if (board[row][col] === 0 || visited[row][col]) continue;
            const currentId = board[row][col];
            idConnectedCount[currentId]++;
            findSameId(row, col, currentId);
        }
    }
    console.log("idConnectedCount", idConnectedCount);
    console.log(board.map((e) => e.join("")).join("\n"));
    console.log();
    for (let i = 1; i <= id; i++) {
        if (idConnectedCount[i] >= 2) removeVirus(i);
    }
    console.log("after delete");
    console.log(board.map((e) => e.join("")).join("\n"));
    console.log();
}

function moveVirus(count) {
    newBoard = Array.from({ length: N }, () => Array(N).fill(0));
    const virusCoords = Array.from({ length: count + 1 }, () => []);
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const id = board[r][c];
            if (id === 0) continue;
            virusCoords[id].push([r, c]);
        }
    }
    const virusInfo = [];
    for (let id = 1; id <= count; id++) {
        virusInfo.push({ id, size: virusSize[id], coords: virusCoords[id] });
    }
    virusInfo.sort((a, b) => {
        if (a.size === b.size) return a.id - b.id;
        return b.size - a.size;
    });
    for (const { id, coords } of virusInfo) {
        let minRow = N,
            minCol = N;
        for (const [r, c] of coords) {
            minRow = Math.min(r, minRow);
            minCol = Math.min(c, minCol);
        }
        let successPut = false;
        for (let r = 0; r < N && !successPut; r++) {
            for (let c = 0; c < N; c++) {
                let canPut = true;
                for (const [curRow, curCol] of coords) {
                    const newRow = r + (curRow - minRow);
                    const newCol = c + (curCol - minCol);
                    if (
                        !isValidBound(newRow, newCol) ||
                        newBoard[newRow][newCol] !== 0
                    ) {
                        canPut = false;
                        break;
                    }
                }
                if (canPut) {
                    for (const [curRow, curCol] of coords) {
                        const newRow = r + (curRow - minRow);
                        const newCol = c + (curCol - minCol);
                        newBoard[newRow][newCol] = id;
                    }
                    console.log("canPut = true");
                    console.log(newBoard.map((e) => e.join("")).join("\n"));
                    console.log();
                    successPut = true;
                    break;
                }
            }
        }
    }
    console.log("before");
    console.log(board.map((e) => e.join("")).join("\n"));
    console.log();
    board = newBoard.map((r) => [...r]);
    console.log("after");
    console.log(board.map((e) => e.join("")).join("\n"));
    console.log();
}

function calculateResult(count) {
    const neighbors = Array.from({ length: count + 1 }, () =>
        Array(count + 1).fill(false)
    );

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const id = board[r][c];
            if (id === 0) continue;
            for (let d = 0; d < 4; d++) {
                const [nr, nc] = [r + dx[d], c + dy[d]];
                if (!isValidBound(nr, nc)) continue;
                const neighborId = board[nr][nc];
                if (neighborId === 0 || neighborId === id) continue;
                neighbors[id][neighborId] = true;
            }
        }
    }
    console.log(neighbors);
    let score = 0;
    for (let i = 1; i <= count; i++) {
        for (let j = i + 1; j <= count; j++) {
            if (neighbors[i][j]) score += virusSize[i] * virusSize[j];
        }
    }
    console.log(score);
}

for (let i = 0; i < 4; i++) {
    const [r1, c1, r2, c2] = coords[i];
    // 투입
    putVirus(i + 1, r1, c1, r2, c2);
    // 이동
    moveVirus(i + 1);
    // 계산
    calculateResult(i + 1);
}
