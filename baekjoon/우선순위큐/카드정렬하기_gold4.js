class MinHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (this.heap[parent] > item) {
                this.heap[index] = this.heap[parent];
                index = parent;
            } else break;
        }
        this.heap[index] = item;
    }
    pop() {
        if (this.heap.length === 2) {
            return this.heap.pop();
        } else if (this.heap.length === 1) return null;
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        const length = this.heap.length;
        let index = 1;
        while (true) {
            const left = index * 2;
            const right = index * 2 + 1;
            let compare = index;
            if (left < length && this.heap[left] < this.heap[compare]) {
                compare = left;
            }
            if (right < length && this.heap[right] < this.heap[compare]) {
                compare = right;
            }
            if (compare !== index) {
                [this.heap[compare], this.heap[index]] = [this.heap[index], this.heap[compare]];
                index = compare;
            } else break;
        }
        return min;
    }
    getMin() {
        return this.heap[1];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    size() {
        return this.heap.length - 1;
    }
}

function solution(n, cards) {
    let answer = 0;
    const heap = new MinHeap();
    for (let i = 0; i < n; i++) {
        heap.insert(cards[i]);
    }
    while (heap.size() > 1) {
        const a = heap.pop();
        const b = heap.pop();
        const sum = a + b;
        answer += sum;
        heap.insert(sum);
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const CARDS = input.map(Number);
console.log(solution(N, CARDS));
