function solution(m, n, board) {
    const newBoard = board.map((e) => e.split(""));
    let answer = 0;
    const findBoom = () => {
        const set = new Set();
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                let target = newBoard[i][j];
                if (target === ".") continue;
                let count = 0;
                for (let x = i; x < i + 2; x++) {
                    for (let y = j; y < j + 2; y++) {
                        if (newBoard[x][y] === target) {
                            count++;
                        }
                    }
                }
                if (count === 4) {
                    set.add(`${i},${j}`);
                    set.add(`${i + 1},${j}`);
                    set.add(`${i},${j + 1}`);
                    set.add(`${i + 1},${j + 1}`);
                }
            }
        }
        return set;
    };
    const applyGravity = () => {
        for (let col = 0; col < n; col++) {
            let stack = [];
            for (let row = m - 1; row >= 0; row--) {
                if (newBoard[row][col] !== ".") {
                    stack.push(newBoard[row][col]);
                }
            }
            for (let row = m - 1; row >= 0; row--) {
                newBoard[row][col] = stack.length ? stack.shift() : ".";
            }
        }
    };
    while (true) {
        const boom = findBoom();
        if (boom.size === 0) break;
        answer += boom.size;
        const coords = [...boom].map((e) => e.split(",").map(Number));
        coords.forEach(([x, y]) => {
            newBoard[x][y] = ".";
        });
        applyGravity();
    }
    return answer;
}
const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
console.log(solution(m, n, board));
