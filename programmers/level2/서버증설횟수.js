function solution(players, m, k) {
    const servers = Array(24).fill(0);
    let answer = 0;

    players.forEach((playerCnt, idx) => {
        if (parseInt(playerCnt / m) > servers[idx]) {
            let needServerCnt = parseInt(playerCnt / m) - servers[idx];
            for (let i = 0; i < k; i++) {
                if (idx + i <= 23) {
                    servers[idx + i] += needServerCnt;
                }
            }
            answer += needServerCnt;
        }
    });
    return answer;
}

const players = [
    0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5,
];
const m = 3;
const k = 5;
console.log(solution(players, m, k));
