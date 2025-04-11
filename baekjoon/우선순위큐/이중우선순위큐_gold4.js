// 메모리 초과 발생
class Heap {
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
        } else if (this.heap.length === 1) {
            return null;
        }
        const value = this.heap[1];
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
        return value;
    }
    size() {
        return this.heap.length - 1;
    }
    getRoot() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }
    clear() {
        this.heap = [null];
    }
}

function solution(k, cmds) {
    const maxHeap = new Heap((a, b) => a > b);
    const minHeap = new Heap((a, b) => a < b);
    const count = new Map();
    const clean = (heap) => {
        while (heap.size()) {
            const val = heap.getRoot();
            if (count.get(val)) break;
            heap.pop();
        }
    };
    const add = (num) => {
        // 1.
        clean(maxHeap);
        clean(minHeap);
        maxHeap.insert(num);
        minHeap.insert(num);
        count.set(num, (count.get(num) || 0) + 1);
    };

    cmds.forEach((v) => {
        [c, value] = v.split(" ");
        const num = Number(value);
        if (c === "I") {
            add(num);
        } else if (c === "D") {
            if (num === 1) {
                clean(maxHeap);
                const max = maxHeap.pop();
                // 2.
                if (max !== null && count.has(max)) {
                    const cnt = count.get(max) - 1;
                    if (cnt === 0) count.delete(max);
                    else count.set(max, cnt);
                }
            } else {
                clean(minHeap);
                const min = minHeap.pop();
                // 2.
                if (min !== null && count.has(min)) {
                    const cnt = count.get(min) - 1;
                    if (cnt === 0) count.delete(min);
                    else count.set(min, cnt);
                }
            }
        }
    });
    clean(maxHeap);
    clean(minHeap);
    if (maxHeap.size() === 0) return "EMPTY";
    return `${maxHeap.getRoot()} ${minHeap.getRoot()}`;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

let T = Number(input.shift());
let idx = 0;
let output = [];

while (T--) {
    const k = Number(input[idx++]);
    const cmds = input.slice(idx, idx + k);
    idx += k;

    output.push(solution(k, cmds));
}

console.log(output.join("\n"));
