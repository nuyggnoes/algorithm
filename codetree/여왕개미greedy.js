// Greedy 시도

const antHouse = [0];
const antHouseDeleted = [false];
const prevDistance = [0, 0];
let totalTime = 0;

function villageConstruction(houseCoord) {
    const N = houseCoord[0];
    for (let i = 1; i <= N; i++) {
        if (i > 1) {
            prevDistance.push(houseCoord[i] - houseCoord[i - 1]);
        }
        antHouse.push(houseCoord[i]);
        antHouseDeleted.push(false);
    }
    totalTime = prevDistance.reduce((prev, cur) => prev + cur, 0);
}

function addNewAntHouse(p) {
    let idx = antHouse.length - 1;
    while (true) {
        if (!antHouseDeleted[idx]) break;
        idx--;
    }
    antHouse.push(p);
    const newDistance = p - antHouse[idx];
    prevDistance.push(newDistance);
    totalTime += newDistance;
}

function removeAntHouse(q) {
    antHouseDeleted[q] = true;
    prevDistance[q] = 0;
    prevDistance[q + 1] = antHouse[q + 1] - antHouse[q - 1];
}

function scoutAntHouse(r) {
    const distances = [];
    for (let i = 1; i < prevDistance.length; i++) {
        if (antHouseDeleted[i]) continue;
        distances.push(prevDistance[i]);
    }

    distances.sort((a, b) => b - a);
    const maxParts = distances.slice(0, r - 1).reduce((sum, v) => sum + v, 0);
    const minTime = totalTime - maxParts;
    console.log(minTime);
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

/*
11
100 6 130571053 281939225 324147832 395096615 487607864 648698255
300 2
400 3
400 2
200 692764898
400 2
300 5
300 3
400 1
400 2
200 945150212
*/
