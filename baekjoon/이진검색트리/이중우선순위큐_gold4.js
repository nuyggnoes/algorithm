function solution(k, cmds) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < k; i++) {
        const [cmd, val] = cmds[i].split(" ");
        const num = Number(val);

        if (cmd === "I") {
            map.set(num, (map.get(num) || 0) + 1);
            count++;
        } else if (count > 0) {
            const keys = [...map.keys()];
            if (keys.length === 0) continue;
            const target = num === 1 ? Math.max(...keys) : Math.min(...keys);
            const now = map.get(target);
            if (now === 1) map.delete(target);
            else map.set(target, now - 1);
            count--;
        }
    }
    if (map.size === 0) return "EMPTY";
    const keys = [...map.keys()];
    return `${Math.max(...keys)} ${Math.min(...keys)}`;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let T = Number(input.shift());
let idx = 0;
let output = [];

while (T--) {
    const k = Number(input[idx++]);
    const cmds = input.slice(idx, idx + k);
    idx += k;

    output.push(solution(k, cmds));
}

console.log(output.join("\n"));
