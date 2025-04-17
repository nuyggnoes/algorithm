function solution(field) {
    const ROW = 12;
    const COL = 6;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let chainCount = 0;

    const bfs = (x, y, visited) => {
        const queue = [[x, y]];
        const coords = [[x, y]];
        visited[x][y] = true;
        const color = field[x][y];
        while (queue.length > 0) {
            const [currentX, currentY] = queue.shift();
            for (let i = 0; i < 4; i++) {
                let [nx, ny] = [currentX + dx[i], currentY + dy[i]];
                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < ROW &&
                    ny < COL &&
                    !visited[nx][ny] &&
                    field[nx][ny] === color
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    coords.push([nx, ny]);
                }
            }
        }
        return coords;
    };

    const boom = (coords) => {
        coords.forEach(([x, y]) => {
            field[x][y] = ".";
        });
    };

    const applyGravity = () => {
        for (let col = 0; col < COL; col++) {
            let stack = [];
            for (let row = ROW - 1; row >= 0; row--) {
                if (field[row][col] !== ".") {
                    stack.push(field[row][col]);
                }
            }
            for (let row = ROW - 1; row >= 0; row--) {
                field[row][col] = stack.length ? stack.shift() : ".";
            }
        }
    };

    while (true) {
        let visited = Array.from({ length: ROW }, () => Array(COL).fill(false));
        let isBoomed = false;

        for (let i = 0; i < ROW; i++) {
            for (let j = 0; j < COL; j++) {
                if (!visited[i][j] && field[i][j] !== ".") {
                    const coords = bfs(i, j, visited);
                    if (coords.length >= 4) {
                        boom(coords);
                        isBoomed = true;
                    }
                }
            }
        }

        if (!isBoomed) break;
        applyGravity();
        chainCount++;
    }
    return chainCount;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const FIELD = input.map((e) => e.split(""));
console.log(solution(FIELD));
