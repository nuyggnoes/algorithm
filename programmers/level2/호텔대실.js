class Heap {
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
        return this.heap[1] ?? null;
    }
    get length() {
        return this.heap.length - 1;
    }
}

function solution(book_time) {
    const timeToMin = (time) => {
        const [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute;
    };
    const times = book_time
        .map(([start, end]) => [timeToMin(start), timeToMin(end) + 10])
        .sort((a, b) => a[0] - b[0]);

    const rooms = new Heap();

    for (const [start, end] of times) {
        // for (let i = 0; i < rooms.length; i++) {
        //     if (rooms[i] <= start) {
        //         rooms[i] = end;
        //         reused = true;
        //         break;
        //     }
        // }
        // if (!reused) {
        //     rooms.push(end);
        // }
        // rooms.sort((a, b) => a - b);
        const earliest = rooms.getMin();

        if (earliest !== null && earliest <= start) {
            rooms.pop();
        }
        rooms.insert(end);
    }

    return rooms.length;
}

const book_time = [
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
];
console.log(solution(book_time));
