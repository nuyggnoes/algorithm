function rotate(matrix, count) {
    const n = matrix.length;
    let current = matrix;

    for (let c = 0; c < count % 4; c++) {
        const rotated = Array.from({ length: n }, () => Array(n).fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                rotated[j][n - 1 - i] = current[i][j];
            }
        }
        current = rotated;
    }
    return current;
}

function solution(key, lock) {
    const n = lock.length;
    const m = key.length;
    const extensionLen = 2 * n - 2 + m;
    const extendedLock = Array.from({ length: extensionLen }, () =>
        Array(extensionLen).fill(2)
    );

    const offset = Math.floor((extensionLen - lock.length) / 2);

    for (let i = 0; i < lock.length; i++) {
        for (let j = 0; j < lock[0].length; j++) {
            extendedLock[offset + i][offset + j] = lock[i][j];
        }
    }

    function tryOpen(key) {
        for (let i = 0; i < extensionLen - m; i++) {
            for (let j = 0; j < extensionLen - m; j++) {
                const copy = extendedLock.map((row) => [...row]);
                for (let x = 0; x < m; x++) {
                    for (let y = 0; y < m; y++) {
                        copy[i + x][j + y] += key[x][y];
                    }
                }
                let success = true;
                for (let x = 0; x < n; x++) {
                    for (let y = 0; y < n; y++) {
                        if (copy[offset + x][offset + y] !== 1) {
                            success = false;
                            break;
                        }
                    }
                    if (!success) break;
                }
                if (success) return true;
            }
        }
        return false;
    }
    for (let d = 1; d <= 4; d++) {
        const rotatedKey = rotate(key, d);
        if (tryOpen(rotatedKey)) return true;
    }
    return false;
}

const key = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
];
const lock = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
];
console.log(solution(key, lock));
