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
        if (this.heap.length === 2) {
            return this.heap.pop();
        } else if (this.heap.length === 1) {
            return null;
        }
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        let length = this.heap.length;
        let idx = 1;
        while (true) {
            const left = idx * 2;
            const right = idx * 2 + 1;
            let current = idx;
            if (left < length && this.heap[left] < this.heap[current]) {
                current = left;
            }
            if (right < length && this.heap[right] < this.heap[current]) {
                current = right;
            }
            if (current !== idx) {
                [this.heap[current], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[current],
                ];
                idx = current;
            } else break;
        }
        return min;
    }
    returnHeap() {
        return this.heap.slice(1);
    }
    clear() {
        this.heap = [null];
    }
}

function solution(n, m, card) {
    const heap = new MinHeap();
    for (let i = 0; i < n; i++) {
        heap.insert(card[i]);
    }
    while (m-- > 0) {
        const result = heap.pop() + heap.pop();
        heap.insert(result);
        heap.insert(result);
    }
    const result = heap.returnHeap();
    return result.reduce((pre, cur) => pre + cur, 0n).toString();
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const CARD = input.shift().split(" ").map(BigInt);
console.log(solution(n, m, CARD));
