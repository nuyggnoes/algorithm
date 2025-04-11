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
    getLength() {
        return this.heap.length - 1;
    }
    getRoot() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }
    clear() {
        this.heap = [null];
    }
}

const minHeap = new Heap((a, b) => a < b);
const maxHeap = new Heap((a, b) => a > b);
