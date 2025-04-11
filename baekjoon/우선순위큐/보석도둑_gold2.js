class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (item > this.heap[parent]) {
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
        const max = this.heap[1];
        this.heap[1] = this.heap.pop();
        let index = 1;
        let length = this.heap.length;
        while (true) {
            const left = index * 2;
            const right = index * 2 + 1;
            let compare = index;
            if (left < length && this.heap[compare] < this.heap[left]) {
                compare = left;
            }
            if (right < length && this.heap[compare] < this.heap[right]) {
                compare = right;
            }
            if (compare !== index) {
                [this.heap[compare], this.heap[index]] = [this.heap[index], this.heap[compare]];
                index = compare;
            } else break;
        }
        return max;
    }
    size() {
        return this.heap.length - 1;
    }
}

function solution(n, k, jewels, bags) {
    let answer = 0;
    bags.sort((a, b) => a - b);
    jewels.sort((a, b) => a[0] - b[0]);
    const jewelValue = new MaxHeap();
    let j = 0;
    for (let i = 0; i < k; i++) {
        while (j < n && jewels[j][0] <= bags[i]) {
            jewelValue.insert(jewels[j][1]);
            j++;
        }
        if (jewelValue.size()) {
            answer += jewelValue.pop();
        }
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const JEWEL = [];
const BAG = [];
for (let i = 0; i < N; i++) {
    JEWEL.push(input[i].split(" ").map(Number));
}
for (let i = N; i < N + K; i++) {
    BAG.push(Number(input[i]));
}
console.log(solution(N, K, JEWEL, BAG));
