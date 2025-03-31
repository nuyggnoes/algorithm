function solution(n, cards, m, target) {
    const answer = [];
    const cardMap = new Map();

    cards.forEach((card) => {
        cardMap.set(card, (cardMap.get(card) || 0) + 1);
    });
    target.forEach((e) => {
        const num = cardMap.get(e);
        if (num) {
            answer.push(num);
        } else {
            answer.push(0);
        }
    });
    return answer;
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const CARD_N = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
const M = Number(input.shift());
const CARD_M = input
    .shift()
    .split(" ")
    .map((e) => Number(e));

console.log(...solution(N, CARD_N, M, CARD_M));
