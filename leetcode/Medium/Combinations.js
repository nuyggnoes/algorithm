/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const answer = [];
    const combination = (start, path) => {
        if (path.length === k) {
            answer.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            combination(i + 1, path);
            path.pop();
        }
    };
    combination(1, []);
    return answer;
};

const n = 4;
const k = 2;
console.log(combine(n, k));
