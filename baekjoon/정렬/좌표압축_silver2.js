function solution(n, coordinates) {
    let answer = "";
    let set = new Set(coordinates);
    let uniq = [...set].sort((a, b) => a - b);
    let dic = {};
    uniq.forEach((e, index) => (dic[e] = index));
    for (let i = 0; i < coordinates.length; i++) {
        answer += dic[coordinates[i]] + " ";
    }
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const COORDINATE = input.shift().split(" ").map(Number);
console.log(solution(N, COORDINATE));
