// 시간초과
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    insert(item) {
        let current = this.heap.length;
        while (current > 1) {
            const parent = Math.floor(current / 2);
            if (item[0] < this.heap[parent][0]) {
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
        let idx = 1;
        const length = this.heap.length;
        while (true) {
            const left = idx * 2;
            const right = idx * 2 + 1;
            let smaller = idx;
            if (left < length && this.heap[left][0] < this.heap[smaller][0]) {
                smaller = left;
            }
            if (right < length && this.heap[right][0] < this.heap[smaller][0]) {
                smaller = right;
            }
            if (smaller !== idx) {
                [this.heap[idx], this.heap[smaller]] = [
                    this.heap[smaller],
                    this.heap[idx],
                ];
            } else break;
        }
        return min;
    }
    getSize() {
        return this.heap.length - 1;
    }
}

function solution(n, paths, gates, summits) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const isSummit = Array(n + 1).fill(false);

    for (const [from, to, time] of paths) {
        graph[from].push([to, time]);
        graph[to].push([from, time]);
    }
    for (const summit of summits) {
        isSummit[summit] = true;
    }

    const intensity = Array(n + 1).fill(Infinity);
    const heap = new MinHeap();

    for (const gate of gates) {
        intensity[gate] = 0;
        heap.insert([0, gate]);
    }
    while (heap.getSize() > 0) {
        const [curIntensity, cur] = heap.pop();

        if (intensity[cur] < curIntensity) continue;
        if (isSummit[cur]) continue;

        for (const [next, time] of graph[cur]) {
            const newIntensity = Math.max(curIntensity, time);
            if (newIntensity < intensity[next]) {
                intensity[next] = newIntensity;
                heap.insert([newIntensity, next]);
            }
        }
    }
    summits.sort((a, b) => a - b);
    let minIntensity = Infinity;
    let minSummit = 0;

    for (const summit of summits) {
        if (intensity[summit] < minIntensity) {
            minIntensity = intensity[summit];
            minSummit = summit;
        }
    }
    return [minSummit, minIntensity];
}

const n = 6;
const paths = [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
];
const gates = [1, 3];
const summits = [5];
console.log(solution(n, paths, gates, summits)); // [5, 3]
