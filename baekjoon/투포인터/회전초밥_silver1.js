function solution(n, d, k, c, sushi) {
    const count = new Map();
    let unique = 0;

    for (let i = 0; i < k; i++) {
        const s = sushi[i];
        if (!count.has(s)) {
            count.set(s, 1);
            unique++;
        } else {
            count.set(s, count.get(s) + 1);
        }
    }
    let answer = unique + (count.has(c) ? 0 : 1);

    for (let i = 1; i < n; i++) {
        const remove = sushi[i - 1];
        const add = sushi[(i + k - 1) % n];

        count.set(remove, count.get(remove) - 1);
        if (count.get(remove) === 0) {
            count.delete(remove);
            unique--;
        }

        if (!count.has(add)) {
            count.set(add, 1);
            unique++;
        } else {
            count.set(add, count.get(add) + 1);
        }
        const hasCoupon = count.has(c) ? 0 : 1;
        answer = Math.max(answer, unique + hasCoupon);
    }
    return answer;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, D, K, C] = input.shift().split(" ").map(Number);
const SUSHI = input.map(Number);
console.log(solution(N, D, K, C, SUSHI));
