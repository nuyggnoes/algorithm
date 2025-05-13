// 100: 마을건설
// 200: 개미집 건설
// 300: 개미집 철거
// 400: 개미집 정찰

const antHouse = [0];
const antHouseDeleted = [false];

function villageConstruction(houseCoord) {
    const N = houseCoord[0];
    for (let i = 1; i <= N; i++) {
        antHouse.push(houseCoord[i]);
        antHouseDeleted.push(false);
    }
}

function addNewAntHouse(p) {
    antHouse.push(p);
}

function removeAntHouse(q) {
    antHouseDeleted[q] = true;
}

function scoutAntHouse(r) {
    let left = 0;
    let right = 1_000_000_000;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let needed = 0;
        let lastSafeHouse = -1_000_000_000;
        for (let i = 1; i < antHouse.length; i++) {
            if (antHouseDeleted[i]) continue;
            const currentHouse = antHouse[i];
            if (currentHouse - lastSafeHouse > mid) {
                needed++;
                lastSafeHouse = currentHouse;
            }
        }
        if (needed <= r) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    console.log(left);
}

function main(Q, info) {
    const commands = info.map((e) => e.split(" ").map(Number));
    for (const [type, ...cmds] of commands) {
        switch (type) {
            case 100: {
                villageConstruction(cmds);
                break;
            }
            case 200: {
                addNewAntHouse(...cmds);
                break;
            }
            case 300: {
                removeAntHouse(...cmds);
                break;
            }
            case 400: {
                scoutAntHouse(...cmds);
                break;
            }
        }
    }
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const Q = +input.shift();
const info = input;

main(Q, info);
// 13 6 13 2

/**
161090391
253601640
264525562
562193845
264525562
*/

/*
161090391
253601640
264525562
562193845
205157034
*/
