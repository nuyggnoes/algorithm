class MinHeap {
    constructor(compareFunction) {
        this.heap = [null];
        this.compareFunction = compareFunction;
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (this.compareFunction(item, this.heap[parent])) {
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
        let index = 1;
        const length = this.heap.length;
        while (true) {
            const left = index * 2;
            const right = index * 2 + 1;
            let compare = index;
            if (left < length && this.compareFunction(this.heap[left], this.heap[compare])) {
                compare = left;
            }
            if (right < length && this.compareFunction(this.heap[right], this.heap[compare])) {
                compare = right;
            }
            if (compare !== index) {
                [this.heap[compare], this.heap[index]] = [this.heap[index], this.heap[compare]];
                index = compare;
            } else break;
        }
        return min;
    }
    isEmpty() {
        return this.heap.length === 1;
    }
}

function solution(n, cmds) {
    const answer = [];
    const heap = new MinHeap((a, b) => {
        const absA = Math.abs(a);
        const absB = Math.abs(b);
        if (absA === absB) return a < b;
        return absA < absB;
    });

    for (let i = 0; i < n; i++) {
        if (cmds[i] === 0) {
            answer.push(heap.isEmpty() ? 0 : heap.pop());
        } else {
            heap.insert(cmds[i]);
        }
    }
    return answer.join("\n");
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const COMMAND = input.map(Number);
console.log(solution(N, COMMAND));
