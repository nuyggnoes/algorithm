// 선물 지수 = (이번달까지 자신이 친구들에게 준 선물의 수) - (받은 선물의 수)
function solution(friends, gifts) {
    const giftHistory = new Map();
    const giftScore = new Map();
    const giftCount = new Map();

    for (const name of friends) {
        giftHistory.set(name, new Map());
        giftScore.set(name, 0);
        giftCount.set(name, 0);
        for (const other of friends) {
            if (name !== other) {
                giftHistory.get(name).set(other, 0);
            }
        }
    }
    for (const line of gifts) {
        const [from, to] = line.split(" ");
        giftHistory.get(from).set(to, giftHistory.get(from).get(to) + 1);
        giftScore.set(from, giftScore.get(from) + 1);
        giftScore.set(to, giftScore.get(to) - 1);
    }
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (friends[i] === friends[j]) continue;
            const a = friends[i];
            const b = friends[j];

            const aGive = giftHistory.get(a).get(b);
            const bGive = giftHistory.get(b).get(a);

            if (aGive > bGive) {
                giftCount.set(a, giftCount.get(a) + 1);
            } else if (aGive === bGive && giftScore.get(a) > giftScore.get(b)) {
                giftCount.set(a, giftCount.get(a) + 1);
            }
        }
    }
    return Math.max(...giftCount.values());
}
const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
];
console.log(solution(friends, gifts)); // 2
