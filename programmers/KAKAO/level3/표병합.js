// 2차원 -> 1차원
// union-find

function solution(commands) {
    const answer = [];
    const SIZE = 2500;
    const parent = Array.from({ length: SIZE }, (_, i) => i);
    const value = Array(SIZE).fill("");

    const getId = (r, c) => (r - 1) * 50 + (c - 1);

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };
    const union = (a, b) => {
        const pa = find(a);
        const pb = find(b);

        if (pa === pb) return;

        if (value[pa] === "") {
            parent[pa] = pb;
            value[pa] = "";
        } else {
            parent[pb] = pa;
            value[pb] = "";
        }
    };

    for (const cmd of commands) {
        const [action, ...args] = cmd.split(" ");

        if (action === "UPDATE") {
            if (args.length === 3) {
                const [r, c, newValue] = args;
                const id = getId(+r, +c);
                const root = find(id);
                value[root] = newValue;
            } else {
                const [oldValue, newValue] = args;
                for (let i = 0; i < SIZE; i++) {
                    if (value[i] === oldValue) value[i] = newValue;
                }
            }
        } else if (action === "MERGE") {
            const [r1, c1, r2, c2] = args.map(Number);
            const id1 = getId(r1, c1);
            const id2 = getId(r2, c2);

            if (id1 === id2) continue;

            union(id1, id2);
        } else if (action === "UNMERGE") {
            const [r, c] = args.map(Number);
            const id = getId(r, c);
            const root = find(id);
            const originalValue = value[root];

            const group = [];
            for (let i = 0; i < SIZE; i++) {
                if (find(i) === root) {
                    group.push(i);
                }
            }

            for (const i of group) {
                parent[i] = i;
                value[i] = "";
            }

            value[id] = originalValue;
        } else if (action === "PRINT") {
            const [r, c] = args.map(Number);
            const id = getId(r, c);
            const root = find(id);

            answer.push(value[root] === "" ? "EMPTY" : value[root]);
        }
    }
    return answer;
}
const commands = [
    "UPDATE 1 1 A",
    "UPDATE 1 2 B",
    "MERGE 1 1 1 2",
    "UPDATE 1 2 C",
    "UNMERGE 1 1",
    "PRINT 1 1",
    "PRINT 1 2",
];

console.log(solution(commands));
