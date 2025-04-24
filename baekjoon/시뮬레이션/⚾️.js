function selectPlayer(arr, selectNum) {
    const result = [];
    const visited = Array(arr.length).fill(false);
    function dfs(path) {
        if (path.length === selectNum) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            path.push(arr[i]);
            dfs(path);
            path.pop();
            visited[i] = false;
        }
    }
    dfs([]);
    return result;
}

function solution(n, board) {
    let maxScore = 0;
    const player = [1, 2, 3, 4, 5, 6, 7, 8];
    const rosters = selectPlayer(player, 8);
    function simulation(roster) {
        let index = 0;
        let score = 0;
        for (let i = 0; i < n; i++) {
            let outCount = 0;
            let base = [0, 0, 0];
            while (outCount < 3) {
                const player = roster[index];
                const result = board[i][player];
                if (result === 0) {
                    outCount++;
                } else if (result === 1) {
                    score += base[2];
                    base[2] = base[1];
                    base[1] = base[0];
                    base[0] = 1;
                } else if (result === 2) {
                    score += base[2] + base[1];
                    base[2] = base[0];
                    base[1] = 1;
                    base[0] = 0;
                } else if (result === 3) {
                    score += base[2] + base[1] + base[0];
                    base = [0, 0, 1];
                } else if (result === 4) {
                    score += base[2] + base[1] + base[0] + 1;
                    base = [0, 0, 0];
                }
                index = (index + 1) % 9;
            }
        }
        return score;
    }

    for (const roster of rosters) {
        roster.splice(3, 0, 0);
        const score = simulation(roster);
        maxScore = Math.max(score, maxScore);
    }
    return maxScore;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const BOARD = input.map((row) => row.split(" ").map(Number));
console.log(solution(N, BOARD));
