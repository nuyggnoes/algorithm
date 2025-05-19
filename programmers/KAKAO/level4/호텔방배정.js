function solution(k, room_number) {
    let answer = [];
    const parent = new Map();

    function find(x) {
        if (!parent.has(x)) {
            parent.set(x, x + 1);
            return x;
        }
        const nextAvailable = find(parent.get(x));
        parent.set(x, nextAvailable);
        return nextAvailable;
    }

    for (let i = 0; i < room_number.length; i++) {
        answer.push(find(room_number[i]));
    }
    return answer;
}
const k = 10;
const room_number = [1, 3, 4, 1, 3, 1];
console.log(solution(k, room_number)); // [1, 3, 4, 2, 5, 6];
