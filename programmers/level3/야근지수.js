function solution({ works, n }) {
    let answer = 0;
    works.sort((a, b) => b - a);
    while (n > 0) {
        let max = works[0];
        for (let i = 0; i < works.length; i++) {
            if (works[i] >= max) {
                n--;
                works[i]--;
            }
            if (!n) break;
        }
    }
    console.log(works);
    return answer;
}

const testcase1 = {
    works: [4, 3, 3],
    n: 4,
}; // 12
const testcase2 = {
    works: [2, 1, 2],
    n: 1,
}; // 6
const testcase3 = {
    works: [1, 1],
    n: 3,
}; // 0

console.log(solution(testcase1));
