function solution(n, coords) {
    const uniqueSorted = [...new Set(coords)].sort((a, b) => a - b);
    function binarySearch(x) {
        let left = 0;
        let right = uniqueSorted.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (uniqueSorted[mid] === x) return mid;
            else if (uniqueSorted[mid] < x) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    return coords.map((x) => binarySearch(x)).join(" ");
}
const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const COORDINATE = input.shift().split(" ").map(Number);
console.log(solution(N, COORDINATE));
