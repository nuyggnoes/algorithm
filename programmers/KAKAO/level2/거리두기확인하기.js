function solution(places) {
    let answer = [];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let T = 0;
    const N = 5;
    function isValid(arr) {
        const board = arr.map((e) => e.split(""));
        const people = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (board[i][j] === "P") {
                    people.push([i, j, 0]);
                }
            }
        }
        for (const info of people) {
            const queue = [info];
            const visited = Array.from({ length: N }, () =>
                Array(N).fill(false)
            );
            while (queue.length > 0) {
                const [cx, cy, dist] = queue.shift();
                if (dist > 2) break;
                visited[cx][cy] = true;
                for (let i = 0; i < 4; i++) {
                    const [nx, ny] = [cx + dx[i], cy + dy[i]];
                    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                    if (visited[nx][ny] || board[nx][ny] === "X") continue;
                    if (board[nx][ny] === "P" && dist + 1 <= 2) {
                        answer.push(0);
                        return;
                    }
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
        answer.push(1);
    }
    while (T < N) {
        isValid(places[T]);
        T++;
    }
    return answer;
}
const places = [
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
console.log(solution(places));
