function solution(n, costs) {
    let answer = 0;
    const visited = [];
    const graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for (const cost of costs) {
        const [from, to, weight] = cost;
        graph[from].push([to, weight]);
        graph[to].push([from, weight]);
    }
    visited.push(0);
    while (visited.length !== n) {
        let minCost = Number.MAX_SAFE_INTEGER;
        let nextNode = -1;
        for (const current of visited) {
            for (const [neighbor, weight] of graph[current]) {
                if (!visited.includes(neighbor) && weight < minCost) {
                    minCost = weight;
                    nextNode = neighbor;
                }
            }
        }
        answer += minCost;
        visited.push(nextNode);
    }
    return answer;
}
console.log(
    solution(4, [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
        [1, 3, 1],
        [2, 3, 8],
    ])
);
