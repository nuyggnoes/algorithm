// 순열 + 백트래킹 + 회전 + BFS + 3차원
const SIZE = 5;
const directions = [
    { start: [0, 0, 0], target: [4, 4, 4] },
    { start: [0, 4, 0], target: [4, 0, 4] },
    { start: [4, 0, 0], target: [0, 4, 4] },
    { start: [4, 4, 0], target: [0, 0, 4] },
    { start: [0, 0, 4], target: [4, 4, 0] },
    { start: [0, 4, 4], target: [4, 0, 0] },
    { start: [4, 0, 4], target: [0, 4, 0] },
    { start: [4, 4, 4], target: [0, 0, 0] },
];

function solution(cube) {
    let min = Infinity;
    function rotate(arr) {
        const resultArr = Array.from({ length: SIZE }, () =>
            Array(SIZE).fill(-1)
        );
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                resultArr[j][SIZE - i - 1] = arr[i][j];
            }
        }
        return resultArr;
    }
    function rotateZ(curCube, z, r) {
        const newCube = curCube.map((layer) => layer.map((row) => [...row]));
        for (let i = 0; i < r; i++) {
            newCube[z] = rotate(newCube[z]);
        }
        return newCube;
    }
    function bfs(start, target, currentCube) {
        const visited = Array.from({ length: SIZE }, () =>
            Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
        );
        const dist = Array.from({ length: SIZE }, () =>
            Array.from({ length: SIZE }, () => Array(SIZE).fill(Infinity))
        );
        const dx = [-1, 1, 0, 0, 0, 0];
        const dy = [0, 0, -1, 1, 0, 0];
        const dz = [0, 0, 0, 0, -1, 1];
        const queue = [start];
        visited[start[0]][start[1]][start[2]] = true;
        dist[start[0]][start[1]][start[2]] = 0;
        while (queue.length > 0) {
            const [cx, cy, cz] = queue.shift();
            if (cx === target[0] && cy === target[1] && cz === target[2])
                return dist[cx][cy][cz];
            for (let i = 0; i < 6; i++) {
                const [nx, ny, nz] = [cx + dx[i], cy + dy[i], cz + dz[i]];
                // prettier-ignore
                if (nx < 0 || ny < 0 || nz < 0 || nx >= SIZE || ny >= SIZE || nz >= SIZE) continue;
                if (visited[nx][ny][nz]) continue;
                if (currentCube[nx][ny][nz] === 0) continue;
                visited[nx][ny][nz] = true;
                dist[nx][ny][nz] = dist[cx][cy][cz] + 1;
                queue.push([nx, ny, nz]);
            }
        }
        return -1;
    }
    function backtrack(depth, currentCube) {
        if (depth === 5) {
            for (const { start, target } of directions) {
                if (
                    currentCube[start[0]][start[1]][start[2]] === 0 ||
                    currentCube[target[0]][target[1]][target[2]] === 0
                )
                    continue;

                const dist = bfs(start, target, currentCube);
                if (dist !== -1) {
                    min = Math.min(min, dist);
                }
            }
            return;
        }
        if (min === 12) return;
        for (let r = 0; r < 4; r++) {
            const rotatedCube = rotateZ(currentCube, depth, r);
            backtrack(depth + 1, rotatedCube);
        }
    }
    function orderCube(tmpCube) {
        const resultCube = [];
        const visited = Array(SIZE).fill(false);
        function dfs(path) {
            if (path.length === SIZE) {
                resultCube.push([...path]);
                return;
            }
            for (let i = 0; i < SIZE; i++) {
                if (visited[i]) continue;
                visited[i] = true;
                path.push(tmpCube[i]);
                dfs(path);
                path.pop();
                visited[i] = false;
            }
        }
        dfs([]);
        return resultCube;
    }
    const permutationCubes = orderCube(cube);
    for (const pCube of permutationCubes) {
        backtrack(0, pCube);
    }
    return min === Infinity ? -1 : min;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");

const flat = input.map((line) => line.split(" ").map(Number));
const CUBE = [];
for (let z = 0; z < SIZE; z++) {
    const layer = [];
    for (let y = 0; y < SIZE; y++) {
        layer.push(flat[z * SIZE + y]);
    }
    CUBE.push(layer);
}
console.log(solution(CUBE));
