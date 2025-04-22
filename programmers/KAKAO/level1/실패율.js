function solution(N, stages) {
    const result = [];
    let total = stages.length;
    for (let i = 1; i <= N; i++) {
        const stay = stages.filter((stage) => stage === i).length;
        const failRate = total === 0 ? 0 : stay / total;
        result.push({ stage: i, failRate });
        total -= stay;
    }
    result.sort((a, b) => {
        if (a.failRate === b.failRate) return a.stage - b.stage;
        return b.failRate - a.failRate;
    });
    return result.map((e) => e.stage);
}
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
