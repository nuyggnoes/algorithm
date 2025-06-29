function solution(picks, minerals) {
    const table = {
        diamond: [1, 5, 25],
        iron: [1, 1, 5],
        stone: [1, 1, 1],
    };

    const groups = [];
    const totalPicks = picks.reduce((a, b) => a + b, 0);
    const repeat = Math.min(totalPicks * 5, minerals.length);
    for (let i = 0; i < repeat; i += 5) {
        const slice = minerals.slice(i, i + 5);
        const score = slice.reduce((acc, cur) => {
            if (cur === "diamond") return acc + 25;
            if (cur === "iron") return acc + 5;
            return acc + 1;
        }, 0);
        groups.push({ minerals: slice, score });
    }
    groups.sort((a, b) => b.score - a.score);

    let answer = 0;
    let pickIndex = 0;
    for (const group of groups) {
        while (pickIndex < 3 && picks[pickIndex] === 0) {
            pickIndex++;
        }
        if (pickIndex >= 3) break;

        for (const mineral of group.minerals) {
            const energy = table[mineral][pickIndex];
            answer += energy;
        }
        picks[pickIndex]--;
    }
    return answer;
}

const picks = [1, 3, 2];
const minerals = [
    "diamond",
    "diamond",
    "diamond",
    "iron",
    "iron",
    "diamond",
    "iron",
    "stone",
];

console.log(solution(picks, minerals));
