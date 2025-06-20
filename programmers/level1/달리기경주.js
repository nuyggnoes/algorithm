function solution(players, callings) {
    const rank = {};

    players.forEach((name, i) => {
        rank[name] = i;
    });
    for (const call of callings) {
        const idx = rank[call];
        const frontPlayer = players[idx - 1];

        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

        rank[call]--;
        rank[frontPlayer]++;
    }
    return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));
