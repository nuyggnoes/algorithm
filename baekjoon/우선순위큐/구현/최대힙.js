class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let index = this.heap.length;
        while (index > 1) {
            const parent = Math.floor(index / 2);
            if (this.heap[parent] < item) {
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
        const length = this.heap.length;
        while (true) {
            const left = index * 2;
            const right = index * 2 + 1;
            let biggest = index;
            if (left < length && this.heap[left] > this.heap[biggest]) {
                biggest = left;
            }
            if (right < length && this.heap[right] > this.heap[biggest]) {
                biggest = right;
            }
            if (biggest !== index) {
                [this.heap[biggest], this.heap[index]] = [this.heap[index], this.heap[biggest]];
                biggest = index;
            } else break;
        }
        return max;
    }
    getLength() {
        return this.heap.length - 1;
    }
    getMax() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }
    clear() {
        this.heap = [null];
    }
}
