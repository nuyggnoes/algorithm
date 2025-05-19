/**
 *
 * @param {number[]} land
 * @returns {number}
 */

function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const memo = Array(m).fill(0);
    let visited = Array.from({ length: n }, () => Array(m).fill(0));

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    function findPetroleum(x, y) {
        const queue = [[x, y]];
        let size = 1;
        const set = new Set();
        set.add(y);
        visited[x][y] = true;
        while (queue.length) {
            const [cx, cy] = queue.shift();
            for (let d = 0; d < 4; d++) {
                const [nx, ny] = [cx + dx[d], cy + dy[d]];
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] || land[nx][ny] === 0) continue;
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                set.add(ny);
                size++;
            }
        }
        for (const y of set) {
            if (memo[y]) memo[y] += size;
            else memo[y] = size;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && land[i][j] === 1) {
                findPetroleum(i, j);
            }
        }
    }
    return Math.max(...memo);
}

const land = [
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
];

console.log(solution(land));
