// q: 서로 다른 5개의 정수 오름차순
// m번의 시도

function solution(n, q, ans) {
    let count = 0;
    const numbers = Array.from({ length: n }, (_, i) => i + 1);

    function isValid(combination) {
        return q.every((element, idx) => {
            const intersection = element.filter((num) =>
                combination.includes(num)
            );
            return intersection.length === ans[idx];
        });
    }

    function generateCombination(start, path) {
        if (path.length === 5) {
            if (isValid(path)) count++;
            return;
        }
        for (let i = start; i < numbers.length; i++) {
            path.push(numbers[i]);
            generateCombination(i + 1, path);
            path.pop();
        }
    }
    generateCombination(0, []);
    return count;
}
const n = 10;
const q = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [3, 7, 8, 9, 10],
    [2, 5, 7, 9, 10],
    [3, 4, 5, 6, 7],
];
const ans = [2, 3, 4, 3, 3];
console.log(solution(n, q, ans)); // 3
