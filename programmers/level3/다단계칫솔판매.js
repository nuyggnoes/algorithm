function solution(enroll, referral, seller, amount) {
    const answer = Array(enroll.length).fill(0);
    const map = new Map();
    const nameIndex = {};
    for (let i = 0; i < enroll.length; i++) {
        nameIndex[enroll[i]] = i;
    }
    for (let i = 0; i < referral.length; i++) {
        if (referral[i] === "-") continue;
        map.set(enroll[i], {
            name: referral[i],
            index: nameIndex[referral[i]],
        });
    }
    function recursive(people, money) {
        const m = Math.floor(money * 0.1);
        const rest = money - m;

        answer[nameIndex[people]] += rest;

        const parent = map.get(people);

        if (m >= 1 && parent) {
            recursive(parent.name, m);
        }
    }
    const newAmount = amount.map((e) => e * 100);
    for (let i = 0; i < seller.length; i++) {
        recursive(seller[i], newAmount[i]);
    }
    return answer;
}
const enroll = [
    "john",
    "mary",
    "edward",
    "sam",
    "emily",
    "jaimie",
    "tod",
    "young",
];
const referral = [
    "-",
    "-",
    "mary",
    "edward",
    "mary",
    "mary",
    "jaimie",
    "edward",
];

const seller = ["young", "john", "tod", "emily", "mary"];
const amount = [12, 4, 2, 5, 10];
console.log(solution(enroll, referral, seller, amount)); // [360, 958, 108, 0, 450, 18, 180, 1080]
