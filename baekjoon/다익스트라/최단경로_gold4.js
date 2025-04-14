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

function solution(v, e, start, info) {
    const distance = Array(v + 1).fill(Infinity);
    const graph = Array.from({ length: v + 1 }, () => []);
    info.forEach(([from, to, cost]) => {
        graph[from].push([to, cost]);
    });
    distance[start] = 0;
    const heap = new MinHeap();
    heap.insert([start, 0]);
    while (!heap.isEmpty()) {
        const [node, cost] = heap.pop();
        if (distance[node] > cost) continue;
        if (cost === distance[node]) {
            for (const [next, nextCost] of graph[node]) {
                distance[next] = Math.min(distance[node] + nextCost, distance[next]);
                heap.insert([next, distance[next]]);
            }
        }
    }
    return distance
        .slice(1)
        .map((e) => {
            if (e === Infinity) return "INF";
            else return e.toString();
        })
        .join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [V, E] = input.shift().split(" ").map(Number);
const START = Number(input.shift());
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(V, E, START, INFO));
