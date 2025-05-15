function solution(n, m, x, y, r, c, k) {
    const dirs = [
        [1, 0, "d"],
        [0, -1, "l"],
        [0, 1, "r"],
        [-1, 0, "u"],
    ];
    let answer = "impossible";
    let found = false;

    const isValid = (x, y) => x >= 1 && y >= 1 && x <= n && y <= m;

    const dfs = (cx, cy, path) => {
        if (found) return;
        const distance = Math.abs(cx - r) + Math.abs(cy - c);
        const remain = k - path.length;

        if (distance > remain || (remain - distance) % 2 !== 0) return;

        if (path.length === k) {
            if (cx === r && cy === c) {
                answer = path;
                found = true;
            }
            return;
        }
        for (const [dx, dy, dir] of dirs) {
            const [nx, ny] = [cx + dx, cy + dy];
            if (isValid(nx, ny)) {
                dfs(nx, ny, path + dir);
            }
        }
    };
    dfs(x, y, "");
    return answer;
}
const n = 3;
const m = 4;
const x = 2;
const y = 3;
const r = 3;
const c = 1;
const k = 5;
console.log(solution(n, m, x, y, r, c, k)); // 'dllrl'
