function solution(N, L, R, city) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    function findUnion(x, y, visited) {
        const queue = [[x, y]];
        const union = [[x, y]];
        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            visited[cx][cy] = true;
            for (let i = 0; i < 4; i++) {
                const [nx, ny] = [cx + dx[i], cy + dy[i]];
                if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                if (visited[nx][ny]) continue;

                const diff = Math.abs(city[nx][ny] - city[cx][cy]);
                if (L <= diff && diff <= R) {
                    visited[nx][ny] = true;
                    union.push([nx, ny]);
                    queue.push([nx, ny]);
                }
            }
        }
        return union;
    }
    let day = 0;
    while (true) {
        const visited = Array.from({ length: N }, () => Array(N).fill(false));
        let moved = false;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (!visited[i][j]) {
                    const union = findUnion(i, j, visited);
                    if (union.length > 1) {
                        const total = union.reduce(
                            (sum, [x, y]) => sum + city[x][y],
                            0
                        );
                        const avg = Math.floor(total / union.length);
                        union.forEach(([x, y]) => {
                            city[x][y] = avg;
                        });
                        moved = true;
                    }
                }
            }
        }
        if (!moved) break;
        day++;
    }
    return day;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, L, R] = input.shift().split(" ").map(Number);
const CITY = input.map((row) => row.split(" ").map(Number));
console.log(solution(N, L, R, CITY));
