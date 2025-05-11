function solution(info, edges) {
    const graph = Array.from({ length: info.length }, () => []);
    for (const [from, to] of edges) {
        graph[from].push(to);
    }
    let maxSheep = 0;
    function dfs(current, sheep, wolf, next) {
        if (info[current] === 0) sheep++;
        else wolf++;

        if (sheep <= wolf) return;

        maxSheep = Math.max(maxSheep, sheep);

        const nextNodes = [...next];
        nextNodes.push(...graph[current]);

        const idx = nextNodes.indexOf(current);
        if (idx > -1) nextNodes.splice(idx, 1);

        for (const node of nextNodes) {
            dfs(node, sheep, wolf, nextNodes);
        }
    }
    dfs(0, 0, 0, [0]);
    return maxSheep;
}
const info = [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1];
const edges = [
    [0, 1],
    [1, 2],
    [1, 4],
    [0, 8],
    [8, 7],
    [9, 10],
    [9, 11],
    [4, 3],
    [6, 5],
    [4, 6],
    [8, 9],
];
console.log(solution(info, edges));
