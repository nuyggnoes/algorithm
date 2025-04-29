// 봄
// 나이만큼 양분 먹고 나이 + 1
// 나이가 어린 나무부터 양분을 먹는다.
// 나이만큼 양분을 못먹으면 즉시 죽는다.
// 여름
// 봄에 죽은 나무가 양분으로 변하게 된다.
// 나이/2 만큼 양분으로 추가된다. 소수점 아래는 버린다.
// 가을
// 번식한다. 번식하는 나무는 나이가 5의 배수
// 번식을 하면 인접 8개의 칸에 나이가 1인 나무 생성
// 겨울
// 양분 추가. A[r][c]
// K년이 지난 후 땅에 살아있는 나무의 개수
// 1-indexed

function solution(n, m, k, arr, treeInfo) {
    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1];
    const ground = Array.from({ length: n + 1 }, () => Array(n + 1).fill(5));
    const addFood = Array.from({ length: n + 1 }, (_, i) => [
        0,
        ...(arr[i - 1] ?? []),
    ]);
    const treeBoard = Array.from({ length: n + 1 }, () =>
        Array.from({ length: n + 1 }, () => [])
    );
    treeInfo.forEach(([x, y, age]) => {
        treeBoard[x][y].push(age);
    });
    for (let year = 0; year < k; year++) {
        // 봄
        const deadTrees = [];
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (treeBoard[i][j].length === 0) continue;
                treeBoard[i][j].sort((a, b) => a - b);
                const alive = [];
                for (const age of treeBoard[i][j]) {
                    if (ground[i][j] >= age) {
                        ground[i][j] -= age;
                        alive.push(age + 1);
                    } else {
                        deadTrees.push([i, j, age]);
                    }
                }
                treeBoard[i][j] = alive;
            }
        }
        // 여름
        for (const [x, y, age] of deadTrees) {
            ground[x][y] += Math.floor(age / 2);
        }
        // 가을
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                for (const age of treeBoard[i][j]) {
                    if (age % 5 === 0) {
                        for (let dir = 0; dir < 8; dir++) {
                            const [nx, ny] = [i + dx[dir], j + dy[dir]];
                            if (nx >= 1 && ny >= 1 && nx <= n && ny <= n) {
                                treeBoard[nx][ny].push(1);
                            }
                        }
                    }
                }
            }
        }
        //겨울
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                ground[i][j] += addFood[i][j];
            }
        }
    }
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            answer += treeBoard[i][j].length;
        }
    }

    return answer;
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M, K] = input.shift().split(" ").map(Number);
const ARR = input.splice(0, N).map((e) => e.split(" ").map(Number));
const TREE = input.splice(0, M).map((e) => e.split(" ").map(Number));
console.log(solution(N, M, K, ARR, TREE));
