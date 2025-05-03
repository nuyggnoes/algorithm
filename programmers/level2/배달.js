function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    road.forEach(([from, to, time]) => {
        graph[from].push([to, time]);
        graph[to].push([from, time]);
    });
    const dist = Array(N + 1).fill(Infinity);
    dist[1] = 0;
    const queue = [[1, 0]];

    while (queue.length > 0) {
        const [current, time] = queue.shift();
        for (const [next, nextTime] of graph[current]) {
            const totalTime = time + nextTime;
            if (totalTime < dist[next]) {
                dist[next] = totalTime;
                queue.push([next, totalTime]);
            }
        }
    }
    return dist.filter((time) => time <= K).length;
}

const N = 6;
const road = [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
];
const K = 4;
console.log(solution(N, road, K));
