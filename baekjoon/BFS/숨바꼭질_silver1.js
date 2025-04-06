function solution(n, k) {
    const queue = [];
    const dist = Array(100001).fill(-1);
    queue.push(n);
    dist[n] = 0;
    let index = 0;
    while (index < queue.length) {
        const current = queue[index++];
        if (current === k) return dist[current];
        const steps = [current - 1, current + 1, current * 2];
        for (const step of steps) {
            if (step >= 0 && step < 100001 && dist[step] === -1) {
                dist[step] = dist[current] + 1;
                queue.push(step);
            }
        }
        // if (current - 1 >= 0 && dist[current - 1] === -1) {
        //     dist[current - 1] = dist[current] + 1;
        //     queue.push(current - 1);
        // }
        // if (current + 1 < 100001 && dist[current + 1] === -1) {
        //     dist[current + 1] = dist[current] + 1;
        //     queue.push(current + 1);
        // }
        // if (current * 2 < 100001 && dist[current * 2] === -1) {
        //     dist[current * 2] = dist[current] + 1;
        //     queue.push(current * 2);
        // }
    }
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
console.log(solution(N, K));
