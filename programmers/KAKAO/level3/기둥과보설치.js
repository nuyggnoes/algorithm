function solution(n, build_frame) {
    const pillarGrid = Array.from({ length: n + 2 }, () =>
        Array(n + 2).fill(false)
    );
    const weirGrid = Array.from({ length: n + 2 }, () =>
        Array(n + 2).fill(false)
    );

    function isValid() {
        for (let x = 0; x <= n; x++) {
            for (let y = 0; y <= n; y++) {
                if (pillarGrid[x][y]) {
                    if (
                        y === 0 ||
                        pillarGrid[x][y - 1] ||
                        weirGrid[x - 1]?.[y] ||
                        weirGrid[x][y]
                    ) {
                    } else return false;
                }
                if (weirGrid[x][y]) {
                    if (
                        pillarGrid[x][y - 1] ||
                        pillarGrid[x + 1][y - 1] ||
                        (weirGrid[x - 1]?.[y] && weirGrid[x + 1]?.[y])
                    ) {
                    } else return false;
                }
            }
        }
        return true;
    }

    for (const [x, y, kind, type] of build_frame) {
        if (kind === 0) {
            // 기둥
            if (type === 1) {
                pillarGrid[x][y] = true;
                if (!isValid()) pillarGrid[x][y] = false;
            } else {
                pillarGrid[x][y] = false;
                if (!isValid()) pillarGrid[x][y] = true;
            }
        } else {
            // 보
            if (type === 1) {
                weirGrid[x][y] = true;
                if (!isValid()) weirGrid[x][y] = false;
            } else {
                weirGrid[x][y] = false;
                if (!isValid()) weirGrid[x][y] = true;
            }
        }
    }

    const result = [];
    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            if (pillarGrid[x][y]) result.push([x, y, 0]);
            if (weirGrid[x][y]) result.push([x, y, 1]);
        }
    }
    return result;
}
const n = 5;
const build_frame = [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
];
console.log(solution(n, build_frame));
