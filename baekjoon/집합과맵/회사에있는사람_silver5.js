function solution(n, workers) {
    const company = {};
    const result = [];
    workers.forEach(([name, state]) => {
        if (!company[name] && state === "enter") {
            company[name] = 1;
        } else if (company[name] && state === "leave") {
            company[name]--;
        }
    });
    for (const name in company) {
        if (company[name] === 1) {
            result.push(name);
        }
    }
    result.sort((a, b) => b.localeCompare(a));
    return result;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const n = Number(input.shift());
const WORKER = input.map((e) => e.split(" "));
console.log(...solution(n, WORKER));
