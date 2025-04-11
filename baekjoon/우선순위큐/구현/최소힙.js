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
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else break;
        }
        return min;
    }
    getLength() {
        return this.heap.length - 1;
    }
    getMin() {
        return this.length > 1 ? this.heap[1] : null;
    }
    clear() {
        this.heap = [null];
    }
}
