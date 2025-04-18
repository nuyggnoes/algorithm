function solution(n, w, l, trucks) {
    let time = 0;
    let bridge = [];
    let truckWeightSum = 0;

    while (bridge.length > 0 || trucks.length > 0) {
        time++;
        // 다리를 지난  트럭 제거
        if (bridge.length > 0 && bridge[0][1] > w) {
            truckWeightSum -= bridge[0][0];
            bridge.shift();
        }
        // 트럭 추가 조건 확인 후 다리에 올리기
        if (
            trucks.length > 0 &&
            bridge.length < w &&
            truckWeightSum + trucks[0] <= l
        ) {
            const next = trucks.shift();
            bridge.push([next, 1]);
            truckWeightSum += next;
        }
        // 다리 위 트럭들 한 칸 전진
        bridge = bridge.map(([truck, time]) => [truck, time + 1]);
    }
    return time;
}

const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .trim()
    .split("\n");
const [N, W, L] = input.shift().split(" ").map(Number);
const TRUCKS = input.shift().split(" ").map(Number);
console.log(solution(N, W, L, TRUCKS));
