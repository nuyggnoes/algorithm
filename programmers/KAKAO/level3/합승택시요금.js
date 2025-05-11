function solution(n, s, a, b, fares) {
    const dist = Array.from({ length: n + 1 }, () =>
        Array(n + 1).fill(Infinity)
    );
    for (let i = 1; i <= n; i++) dist[i][i] = 0;
    for (const [u, v, cost] of fares) {
        dist[u][v] = cost;
        dist[v][u] = cost;
    }
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    let answer = Infinity;
    for (let i = 1; i <= n; i++) {
        const cost = dist[s][i] + dist[i][a] + dist[i][b];
        answer = Math.min(cost, answer);
    }
    return answer;
}

const n = 6;
const s = 4; // 출발
const a = 6; // a 도착
const b = 2; // b 도착
const fares = [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
];
console.log(solution(n, s, a, b, fares));
