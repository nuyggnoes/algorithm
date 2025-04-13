// 아이디어 힌트
// 가상의 노드를 하나 설정
// 첫 시도는 메모리 초과(일반 배열 사용)
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (this.heap[parent][1] > item[1]) {
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
        let current = 1;
        const length = this.heap.length;
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

function solution(n, self, info) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array(n + 1).fill(false);
    const heap = new MinHeap();
    let totalCost = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            graph[i + 1].push([j + 1, info[i][j]]);
        }
    }
    for (let i = 0; i < n; i++) {
        graph[0].push([i + 1, self[i]]);
        graph[i + 1].push([0, self[i]]);
    }
    heap.insert([0, 0]);
    while (!heap.isEmpty()) {
        const [to, cost] = heap.pop();
        if (visited[to]) continue;
        visited[to] = true;
        totalCost += cost;
        for (const [next, nextCost] of graph[to]) {
            if (!visited[next]) {
                heap.insert([next, nextCost]);
            }
        }
    }
    return totalCost;
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const SELF = input.splice(0, N).map(Number);
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, SELF, INFO));
