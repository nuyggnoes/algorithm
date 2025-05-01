const getZeroCount = (arr) =>
    arr.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);

const rotate = (arr, robots) => {
    const last = arr.pop();
    arr.unshift(last);

    robots.pop();
    robots.unshift(false);
};

const moveRobots = (arr, robots, n) => {
    for (let i = n - 2; i > -1; i--) {
        if (!robots[i]) continue;

        if (!robots[i + 1] && arr[i + 1] > 0) {
            robots[i + 1] = true;
            robots[i] = false;
            arr[i + 1] -= 1;
        }
    }
};
const addRobot = (arr, robots) => {
    if (arr[0] > 0) {
        arr[0] -= 1;
        robots[0] = true;
    }
};

const removeNthRobot = (robots, n) => {
    robots[n] = false;
};

function solution(n, k, arr) {
    const robots = Array(n).fill(false);
    let step = 0;
    while (getZeroCount(arr) < k) {
        step++;
        rotate(arr, robots);
        if (robots[n - 1]) removeNthRobot(robots, n - 1);
        moveRobots(arr, robots, n);
        if (robots[n - 1]) removeNthRobot(robots, n - 1);

        addRobot(arr, robots);
    }
    return step;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
console.log(solution(n, k, arr));
