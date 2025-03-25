function solution({ n, roads, sources, destination }) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const distance = Array(n + 1).fill(-1);

    for (const [from, to] of roads) {
        graph[from].push(to);
        graph[to].push(from);
    }
    const queue = [destination];
    distance[destination] = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        for (const node of graph[current]) {
            if (distance[node] === -1) {
                distance[node] = distance[current] + 1;
                queue.push(node);
            }
        }
    }
    return sources.map((source) => distance[source]);
}
const testcase1 = {
    n: 3,
    roads: [
        [1, 2],
        [2, 3],
    ],
    sources: [2, 3],
    destination: 1,
}; // [1, 2]
const testcase2 = {
    n: 5,
    roads: [
        [1, 2],
        [1, 4],
        [2, 4],
        [2, 5],
        [4, 5],
    ],
    sources: [1, 3, 5],
    destination: 5,
}; // [2, -1, 0]

console.log(solution(testcase2));
