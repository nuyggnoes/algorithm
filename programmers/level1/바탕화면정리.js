function solution(wallpaper) {
    const board = wallpaper.map((e) => e.split(""));
    const n = board.length;
    const m = board[0].length;
    const coordinate = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "#") coordinate.push([i, j]);
        }
    }

    let lux = Number.MAX_SAFE_INTEGER;
    let luy = Number.MAX_SAFE_INTEGER;
    let rdx = 0;
    let rdy = 0;

    for (const [x, y] of coordinate) {
        lux = Math.min(x, lux);
        luy = Math.min(y, luy);
        rdx = Math.max(x, rdx);
        rdy = Math.max(y, rdy);
    }

    return [lux, luy, rdx + 1, rdy + 1];
}

const wallpaper = [
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
];
console.log(solution(wallpaper));
