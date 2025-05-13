const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, T] = input.shift().split(" ").map(Number);
const sacredFoods = input.slice(0, N).map((e) => e.split(""));
const faithLevels = input.slice(N, N * 2).map((e) => e.split(" ").map(Number));
const FOOD_PRIORITY = {
    T: 3,
    C: 2,
    M: 1,
};

const FOOD_RESULT_ORDER = {
    TCM: 0,
    TC: 1,
    TM: 2,
    CM: 3,
    M: 4,
    C: 5,
    T: 6,
};

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let sacredFoodGroups = [];
let visited = Array.from({ length: N }, () => Array(N).fill(false));
let defended = Array.from({ length: N }, () => Array(N).fill(false));

const isValidBound = (x, y) => x >= 0 && y >= 0 && x < N && y < N;

function normalizeFood(str) {
    const mergedSet = new Set(str);
    return [...mergedSet]
        .sort((a, b) => FOOD_PRIORITY[b] - FOOD_PRIORITY[a])
        .join("");
}

function morningTime() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            faithLevels[i][j]++;
        }
    }
}

function searchSacredFoodGroup(x, y) {
    const queue = [[x, y]];
    const groupCoords = [[x, y]];
    let maxValue = faithLevels[x][y];
    let leader = [x, y];
    visited[x][y] = true;
    while (queue.length) {
        const [cx, cy] = queue.shift();
        for (let d = 0; d < 4; d++) {
            const [nx, ny] = [cx + dx[d], cy + dy[d]];
            if (!isValidBound(nx, ny) || visited[nx][ny]) continue;
            if (sacredFoods[nx][ny] !== sacredFoods[cx][cy]) continue;
            const newFaith = faithLevels[nx][ny];
            if (
                newFaith > maxValue ||
                (newFaith === maxValue &&
                    (nx < leader[0] || (nx === leader[0] && ny < leader[1])))
            ) {
                maxValue = newFaith;
                leader = [nx, ny];
            }
            groupCoords.push([nx, ny]);
            queue.push([nx, ny]);
            visited[nx][ny] = true;
        }
    }
    return [leader, groupCoords];
}

function lunchTime() {
    visited = Array.from({ length: N }, () => Array(N).fill(false));
    sacredFoodGroups = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const foodType = sacredFoods[i][j];
            if (visited[i][j]) continue;
            const [leader, coords] = searchSacredFoodGroup(i, j);
            for (const [x, y] of coords) faithLevels[x][y]--;
            faithLevels[leader[0]][leader[1]] += coords.length;
            sacredFoodGroups.push({
                foodType,
                coords,
                leader,
                faithLevel: faithLevels[leader[0]][leader[1]],
            });
        }
    }
    sacredFoodGroups.sort((a, b) => {
        if (a.foodType.length !== b.foodType.length) {
            return a.foodType.length - b.foodType.length;
        }
        if (a.faithLevel !== b.faithLevel) {
            return b.faithLevel - a.faithLevel;
        }
        if (a.leader[0] !== b.leader[0]) {
            return a.leader[0] - b.leader[0];
        }
        return a.leader[1] - b.leader[1];
    });
}

function eveningTime() {
    for (const { leader, faithLevel } of sacredFoodGroups) {
        const [leaderX, leaderY] = leader;

        // 당일에 전파당한 리더는 전파를 할 수 없다.
        if (faithLevels[leaderX][leaderY] !== faithLevel) continue;

        faithLevels[leaderX][leaderY] = 1;
        let x = faithLevel - 1;
        const dir = faithLevel % 4;
        let cx = leaderX;
        let cy = leaderY;

        while (true) {
            const [nx, ny] = [cx + dx[dir], cy + dy[dir]];
            if (!isValidBound(nx, ny)) break;
            if (sacredFoods[cx][cy] === sacredFoods[nx][ny]) {
                cx = nx;
                cy = ny;
                continue;
            }
            const y = faithLevels[nx][ny];
            if (x > y) {
                // 강한전파
                x -= y + 1;
                faithLevels[nx][ny]++;
                sacredFoods[nx][ny] = sacredFoods[leaderX][leaderY];
                defended[nx][ny] = true;
            } else {
                // 약한전파
                faithLevels[nx][ny] += x;
                x = 0;
                // 음식 합치기
                sacredFoods[nx][ny] = normalizeFood(
                    sacredFoods[nx][ny] + sacredFoods[leaderX][leaderY]
                );
                defended[nx][ny] = true;
            }
            if (x === 0) break;
        }
    }
}

function dayReport() {
    const result = Array(7).fill(0);
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const type = sacredFoods[i][j];
            switch (type) {
                case "TCM": {
                    result[FOOD_RESULT_ORDER.TCM] += faithLevels[i][j];
                    break;
                }
                case "TC": {
                    result[FOOD_RESULT_ORDER.TC] += faithLevels[i][j];
                    break;
                }
                case "TM": {
                    result[FOOD_RESULT_ORDER.TM] += faithLevels[i][j];
                    break;
                }
                case "CM": {
                    result[FOOD_RESULT_ORDER.CM] += faithLevels[i][j];
                    break;
                }
                case "M": {
                    result[FOOD_RESULT_ORDER.M] += faithLevels[i][j];
                    break;
                }
                case "C": {
                    result[FOOD_RESULT_ORDER.C] += faithLevels[i][j];
                    break;
                }
                case "T": {
                    result[FOOD_RESULT_ORDER.T] += faithLevels[i][j];
                    break;
                }
            }
        }
    }
    console.log(result.join(" "));
}

function main() {
    for (let t = 0; t < T; t++) {
        // 아침
        morningTime();
        // 점심
        lunchTime();
        // 저녁
        eveningTime();
        // 결과
        dayReport();
    }
}
main();
