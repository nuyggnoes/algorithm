function solution(n, m, x, y, k, map, cmds) {
    // 동: 1, 서: 2, 남: 3, 북: 4
    const DICE_COL = [0, 0, 0, 0];
    const DICE_ROW = [0, 0, 0];
    let bottom = 1;
    let top = 3;
    const goEast = () => {
        if (y + 1 >= m) return;
        y++;
        DICE_ROW.push(DICE_ROW.shift());
        DICE_COL[1] = DICE_ROW[1];
        [DICE_ROW[2], DICE_COL[3]] = [DICE_COL[3], DICE_ROW[2]];
        if (map[x][y] === 0) {
            map[x][y] = DICE_COL[bottom];
        } else {
            DICE_COL[bottom] = map[x][y];
            DICE_ROW[bottom] = map[x][y];
            map[x][y] = 0;
        }
        answer.push(DICE_COL[top]);
    };
    const goWest = () => {
        if (y - 1 < 0) return;
        y--;
        DICE_ROW.unshift(DICE_ROW.pop());
        DICE_COL[1] = DICE_ROW[1];
        [DICE_ROW[0], DICE_COL[3]] = [DICE_COL[3], DICE_ROW[0]];
        if (map[x][y] === 0) {
            map[x][y] = DICE_COL[bottom];
        } else {
            DICE_COL[bottom] = map[x][y];
            DICE_ROW[bottom] = map[x][y];
            map[x][y] = 0;
        }
        answer.push(DICE_COL[top]);
    };
    const goSouth = () => {
        if (x + 1 >= n) return;
        x++;
        DICE_COL.push(DICE_COL.shift());
        DICE_ROW[1] = DICE_COL[1];
        if (map[x][y] === 0) {
            map[x][y] = DICE_COL[bottom];
        } else {
            DICE_COL[bottom] = map[x][y];
            DICE_ROW[bottom] = map[x][y];
            map[x][y] = 0;
        }
        answer.push(DICE_COL[top]);
    };
    const goNorth = () => {
        if (x - 1 < 0) return;
        x--;
        DICE_COL.unshift(DICE_COL.pop());
        DICE_ROW[1] = DICE_COL[1];
        if (map[x][y] === 0) {
            map[x][y] = DICE_COL[bottom];
        } else {
            DICE_COL[bottom] = map[x][y];
            DICE_ROW[bottom] = map[x][y];
            map[x][y] = 0;
        }
        answer.push(DICE_COL[top]);
    };
    let answer = [];
    cmds.forEach((cmd) => {
        switch (cmd) {
            case 1:
                goEast();
                break;
            case 2:
                goWest();
                break;
            case 3:
                goNorth();
                break;
            case 4:
                goSouth();
        }
    });
    return answer.join("\n");
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M, x, y, K] = input.shift().split(" ").map(Number);
const MAP = input.splice(0, N).map((e) => e.split(" ").map(Number));
const CMD = input.shift().split(" ").map(Number);
console.log(solution(N, M, x, y, K, MAP, CMD));
