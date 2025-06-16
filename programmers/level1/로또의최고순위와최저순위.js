function solution(lottos, win_nums) {
    const zeroCount = lottos.filter((num) => num === 0).length;
    const matchedCount = lottos.filter((num) => win_nums.includes(num)).length;

    const max = matchedCount + zeroCount;
    const min = matchedCount;

    const rank = (n) => (n >= 2 ? 7 - n : 6);

    return [rank(max), rank(min)];
}

const lottos = [1, 2, 3, 4, 5, 0];
const win_nums = [7, 8, 9, 10, 11, 12];
console.log(solution(lottos, win_nums));
