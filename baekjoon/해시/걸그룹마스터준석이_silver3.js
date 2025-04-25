function solution(n, m, board) {
    const girlGroup = {};
    const memberGroup = {};
    const result = [];
    for (let i = 0; i < n; i++) {
        const groupName = board.shift();
        const groupCount = +board.shift();
        girlGroup[`${groupName}`] = [];
        for (let j = 0; j < groupCount; j++) {
            const name = board.shift();
            girlGroup[`${groupName}`].push(name);
            if (memberGroup[`${name}`] === undefined) {
                memberGroup[`${name}`] = [groupName];
            } else {
                memberGroup[`${name}`].push(groupName);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        const [quiz, type] = board.splice(0, 2);
        if (type === "0") {
            result.push(...girlGroup[`${quiz}`].sort());
        }
        if (type === "1") {
            result.push(...memberGroup[`${quiz}`]);
        }
    }
    return result.join("\n");
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((e) => e);
console.log(solution(N, M, BOARD));
