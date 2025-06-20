function solution(maps) {
    const board = maps.map((e) => e.split(""));
    const n = board.length;
    const m = board[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const bfs = (x, y) => {
        const dx = [1, 0, -1, 0];
        const dy = [0, 1, 0, -1];
        const queue = [[x, y]];
        let result = Number(board[x][y]);
        visited[x][y] = true;

        while (queue.length) {
            const [cx, cy] = queue.shift();

            for (let dir = 0; dir < 4; dir++) {
                const [nx, ny] = [cx + dx[dir], cy + dy[dir]];
                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < m &&
                    !visited[nx][ny] &&
                    board[nx][ny] !== "X"
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    result += Number(board[nx][ny]);
                }
            }
        }
        return result;
    };

    const answer = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && board[i][j] !== "X") {
                let day = bfs(i, j);
                answer.push(day);
            }
        }
    }
    answer.sort((a, b) => a - b);
    return answer.length ? answer : [-1];
}

const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];
console.log(solution(maps));
