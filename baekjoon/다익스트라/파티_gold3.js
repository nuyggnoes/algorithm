// 힌트: 역방향 그래프
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (item[1] < this.heap[parent][1]) {
                this.heap[index] = this.heap[parent];
                index = parent;
            } else break;
        }
        this.heap[index] = item;
    }
    pop() {
        if (this.heap.length === 2) {
            return this.heap.pop();
        } else if (this.heap.length === 1) {
            return null;
        }
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        const length = this.heap.length;
        let current = 1;
        while (true) {
            const left = current * 2;
            const right = current * 2 + 1;
            let compare = current;
            if (left < length && this.heap[left][1] < this.heap[compare][1]) {
                compare = left;
            }
            if (right < length && this.heap[right][1] < this.heap[compare][1]) {
                compare = right;
            }
            if (compare !== current) {
                [this.heap[compare], this.heap[current]] = [this.heap[current], this.heap[compare]];
                current = compare;
            } else break;
        }
        return min;
    }
    isEmpty() {
        return this.heap.length === 1;
    }
}

function solution(n, m, x, info) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const reverseGraph = Array.from({ length: n + 1 }, () => []);
    info.forEach(([from, to, cost]) => {
        graph[from].push([to, cost]);
        reverseGraph[to].push([from, cost]);
    });

    const dijkstra = (start, graph) => {
        const dist = Array(n + 1).fill(Infinity);
        const heap = new MinHeap();
        dist[start] = 0;
        heap.insert([start, 0]);
        while (!heap.isEmpty()) {
            const [node, cost] = heap.pop();
            if (dist[node] < cost) continue;
            for (const [next, nextCost] of graph[node]) {
                const total = cost + nextCost;
                if (total < dist[next]) {
                    dist[next] = total;
                    heap.insert([next, total]);
                }
            }
        }
        return dist;
    };
    const fromX = dijkstra(x, graph);
    const toX = dijkstra(x, reverseGraph);
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        const total = toX[i] + fromX[i];
        maxTime = Math.max(maxTime, total);
    }
    return maxTime;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M, X] = input.shift().split(" ").map(Number);
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, M, X, INFO));
