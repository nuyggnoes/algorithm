class MinHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (item < this.heap[parent]) {
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
    size() {
        return this.heap.length - 1;
    }
}

function solution(k, files) {
    const minHeap = new MinHeap();
    let answer = 0;
    for (let i = 0; i < k; i++) {
        minHeap.insert(files[i]);
    }
    while (minHeap.size() > 1) {
        const a = minHeap.pop();
        const b = minHeap.pop();
        const sum = a + b;
        answer += sum;
        minHeap.insert(sum);
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const T = Number(input.shift());
const answer = [];
for (let i = 0; i < T; i++) {
    const K = Number(input.shift());
    const FILES = input.shift().split(" ").map(Number);
    answer.push(solution(K, FILES));
}
console.log(answer.join("\n"));
