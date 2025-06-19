class Heap {
    constructor() {
        this.heap = [null];
    }

    insert(element) {
        let current = this.heap.length;
        while (current > 1) {
            const parent = Math.floor(current / 2);
            if (this.heap[parent] > element) {
                this.heap[current] = this.heap[parent];
                current = parent;
            } else break;
        }
        this.heap[current] = element;
    }
    pop() {
        if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 1) return null;

        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        let index = 1;
        const length = this.heap.length;

        while (true) {
            const left = index * 2;
            const right = index * 2 + 1;
            let smallest = index;
            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [
                    this.heap[smallest],
                    this.heap[index],
                ];
                index = smallest;
            } else break;
        }
        return min;
    }
    getMin() {
        return this.heap[1];
    }
    getLength() {
        return this.heap.length - 1;
    }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new Heap();
    scoville.forEach((v) => heap.insert(v));

    while (heap.getLength() >= 2 && heap.getMin() < K) {
        const first = heap.pop();
        const second = heap.pop();
        heap.insert(first + second * 2);
        answer++;
    }
    return heap.getMin() >= K ? answer : -1;
}

const scoville = [1, 2, 3, 9, 10, 12];
const K = 7;
console.log(solution(scoville, K));
