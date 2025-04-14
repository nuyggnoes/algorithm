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

function solution(n, m, bus, target) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const distance = Array(n + 1).fill(Infinity);
    const pre = Array(n + 1).fill(0);
    const heap = new MinHeap();
    bus.forEach(([from, to, cost]) => {
        graph[from].push([to, cost]);
    });
    distance[target[0]] = 0;
    let [start, end] = target;
    heap.insert([start, 0]);
    while (!heap.isEmpty()) {
        const [current, cost] = heap.pop();
        if (distance[current] !== cost) continue;
        for (const [next, nextCost] of graph[current]) {
            if (distance[current] + nextCost >= distance[next]) continue;
            distance[next] = distance[current] + nextCost;
            heap.insert([next, distance[next]]);
            pre[next] = current;
        }
    }
    const answer = [];
    let route = [];
    answer.push(distance[end]);
    const findPath = (from, to) => {
        if (from === to) {
            route = [to, ...route];
            return;
        }
        route = [to, ...route];
        return findPath(from, pre[to]);
    };
    findPath(start, end);
    answer.push(route.length);
    answer.push(route.join(" "));
    return answer.join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
const BUS_INFO = input.splice(0, M).map((e) => e.split(" ").map(Number));
const TARGET = input.shift().split(" ").map(Number);
console.log(solution(N, M, BUS_INFO, TARGET));
