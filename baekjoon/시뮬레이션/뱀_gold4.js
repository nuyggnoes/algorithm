function solution(n, k, apple, l, snake) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    apple.forEach(([x, y]) => {
        board[x - 1][y - 1] = 1;
    });
    let time = 0;
    let direction = 1;
    let idx = 0;
    const bfs = () => {
        const snakeQueue = [[0, 0]];
        board[0][0] = 2;
        while (true) {
            time++;
            const [hx, hy] = snakeQueue[snakeQueue.length - 1];
            const [nx, ny] = [hx + dx[direction], hy + dy[direction]];
            if (nx < 0 || ny < 0 || nx >= n || ny >= n || board[nx][ny] === 2)
                break;
            if (board[nx][ny] === 1) {
                board[nx][ny] = 2;
                snakeQueue.push([nx, ny]);
            } else {
                board[nx][ny] = 2;
                snakeQueue.push([nx, ny]);
                const [tx, ty] = snakeQueue.shift();
                board[tx][ty] = 0;
            }
            if (idx < snake.length && +snake[idx][0] === time) {
                direction = (direction + (snake[idx][1] === "L" ? 3 : 1)) % 4;
                idx++;
            }
        }
    };
    bfs();
    return time;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = Number(input.shift());
const K = Number(input.shift());
const APPLE = input.splice(0, K).map((e) => e.split(" ").map(Number));
const L = Number(input.shift());
const SNAKE = input.splice(0, L).map((e) => e.split(" "));
console.log(solution(N, K, APPLE, L, SNAKE));
