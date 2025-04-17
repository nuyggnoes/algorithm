function solution(gear, k, info) {
    // N극: 0, S극: 1
    // 시계방향: 1, 반시계방향: -1
    const rotate = (gearArr, dir) => {
        if (dir === 1) {
            gearArr.unshift(gearArr.pop());
        } else if (dir === -1) {
            gearArr.push(gearArr.shift());
        }
    };

    info.forEach(([targetGear, direction]) => {
        targetGear--;
        const rotateDir = [0, 0, 0, 0];
        rotateDir[targetGear] = direction;

        for (let i = targetGear - 1; i >= 0; i--) {
            if (gear[i][2] !== gear[i + 1][6]) {
                rotateDir[i] = -rotateDir[i + 1];
            } else break;
        }

        for (let i = targetGear + 1; i <= 3; i++) {
            if (gear[i][6] !== gear[i - 1][2]) {
                rotateDir[i] = -rotateDir[i - 1];
            } else break;
        }
        rotateDir.forEach((element, index) => {
            if (element === 0) return;
            rotate(gear[index], element);
        });
    });
    let score = 0;
    for (let i = 0; i < 4; i++) {
        if (gear[i][0] === 1) score += 2 ** i;
    }
    return score;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const GEAR = input.splice(0, 4).map((e) => e.split("").map(Number));
const K = Number(input.shift());
const INFO = input.map((e) => e.split(" ").map(Number));

console.log(solution(GEAR, K, INFO));
