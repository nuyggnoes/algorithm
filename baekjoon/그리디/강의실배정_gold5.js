class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(item) {
        let current = this.heap.length;
        while (current > 1) {
            const parent = Math.floor(current / 2);
            if (this.heap[parent] > item) {
                this.heap[current] = this.heap[parent];
                current = parent;
            } else break;
        }
        this.heap[current] = item;
    }
    pop() {
        if (this.heap.length === 0) {
            return null;
        } else if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        let length = this.heap.length;
        let index = 1;
        let current = index;
        while (true) {
            const left = current * 2;
            const right = current * 2 + 1;
            if (left < length && this.heap[left] < this.heap[current]) {
                current = left;
            }
            if (right < length && this.heap[right] < this.heap[current]) {
                current = right;
            }
            if (current !== index) {
                [this.heap[index], this.heap[current]] = [
                    this.heap[current],
                    this.heap[index],
                ];
                index = current;
            } else break;
        }
        return min;
    }
    peek() {
        return this.heap[1];
    }
    size() {
        return this.heap.length - 1;
    }
}

function solution(n, info) {
    info.sort((a, b) => a[0] - b[0]);
    const minHeap = new MinHeap();
    minHeap.insert(info[0][1]);

    for (let i = 1; i < n; i++) {
        const [start, end] = info[i];
        if (minHeap.peek() <= start) {
            minHeap.pop();
        }
        minHeap.insert(end);
    }
    return minHeap.size();
}
const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const N = +input.shift();
const INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, INFO));
