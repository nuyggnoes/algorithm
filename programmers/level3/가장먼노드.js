function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    const distances = Array.from({ length: n + 1 }, () => 0);

    edge.forEach((e) => {
        let [from, to] = e;
        graph[from].push(to);
        graph[to].push(from);
    });
    const bfs = (index) => {
        let queue = [[index, 0]];
        visited[index] = true;
        while (queue.length) {
            let [current, d] = queue.shift();
            distances[current] = d;
            graph[current].forEach((node) => {
                if (!visited[node]) {
                    visited[node] = true;
                    queue.push([node, d + 1]);
                }
            });
        }
    };
    bfs(1);
    return distances.filter((distance) => distance === Math.max(...distances)).length;
}
console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
);
