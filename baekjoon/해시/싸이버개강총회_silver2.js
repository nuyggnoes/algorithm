function solution(s, e, q, board) {
    function toMinutes(timeStr) {
        const [h, m] = timeStr.split(":").map(Number);
        return h * 60 + m;
    }
    const start = toMinutes(s);
    const end = toMinutes(e);
    const quit = toMinutes(q);

    const enter = new Set();
    const exited = new Set();

    for (const [timeStr, name] of board) {
        const time = toMinutes(timeStr);

        if (time <= start) {
            enter.add(name);
        } else if (time >= end && time <= quit) {
            if (enter.has(name)) {
                exited.add(name);
            }
        }
    }
    return exited.size;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [S, E, Q] = input.shift().split(" ");
const BOARD = input.map((e) => e.split(" "));
console.log(solution(S, E, Q, BOARD));
