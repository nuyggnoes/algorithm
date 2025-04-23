function solution(n, l, r, city) {
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
                if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
                if (visited[nx][ny]) continue;
                const diff = Math.abs(city[nx][ny] - city[cx][cy]);
                if (diff > r || diff < l) continue;
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                union.push([nx, ny]);
            }
        }
        return union;
    }
    let days = 0;
    while (true) {
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        let moved = false;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
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
        days++;
    }
    return days;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, L, R] = input.shift().split(" ").map(Number);
const CITY = input.map((row) => row.split(" ").map(Number));
console.log(solution(N, L, R, CITY));
