function solution(park, routes) {
    const dir = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };
    const board = park.map((e) => e.split(""));
    const h = board.length;
    const w = board[0].length;
    let position = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (board[i][j] === "S") {
                position = [i, j];
            }
        }
    }
    for (const route of routes) {
        const [d, weight] = route.split(" ");
        const [dx, dy] = dir[d];
        const originalPosition = position;
        for (let i = 0; i < Number(weight); i++) {
            const [nx, ny] = [position[0] + dx, position[1] + dy];
            if (
                nx < 0 ||
                ny < 0 ||
                nx >= h ||
                ny >= w ||
                board[nx][ny] === "X"
            ) {
                position = originalPosition;
                break;
            }
            position = [nx, ny];
        }
    }
    return position;
}

const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

console.log(solution(park, routes));
