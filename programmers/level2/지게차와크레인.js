function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;
    let map = storage.map((row) => row.split(""));
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    const isInBounds = (x, y) => x >= 0 && y >= 0 && x < n && y < m;
    const markOutside = () => {
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (
                    (i === 0 || i === n - 1 || j === 0 || j === m - 1) &&
                    map[i][j] === "."
                ) {
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }
        while (queue.length) {
            const [x, y] = queue.shift();
            for (let d = 0; d < 4; d++) {
                const [nx, ny] = [x + dx[d], y + dy[d]];
                if (
                    isInBounds(nx, ny) &&
                    !visited[nx][ny] &&
                    map[nx][ny] === "."
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        return visited;
    };
    for (const req of requests) {
        const char = req[0];

        if (req.length === 1) {
            const outside = markOutside();
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (map[i][j] === char) {
                        for (let d = 0; d < 4; d++) {
                            const [ni, nj] = [i + dx[d], j + dy[d]];
                            if (
                                !isInBounds(ni, nj) ||
                                (map[ni][nj] === "." && outside[ni][nj])
                            ) {
                                map[i][j] = ".";
                                break;
                            }
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (map[i][j] === char) {
                        map[i][j] = ".";
                    }
                }
            }
        }
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (map[i][j] !== ".") answer++;
        }
    }
    return answer;
}

const storage = ["AZWQY", "CAABX", "BBDDA", "ACACA"];
const requests = ["A", "BB", "A"];
console.log(solution(storage, requests));
