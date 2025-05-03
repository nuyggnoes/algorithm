function solution(orders, course) {
    const getCombinations = (arr, length) => {
        const result = [];
        function backtrack(start, path) {
            if (path.length === length) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        }
        backtrack(0, []);
        return result;
    };
    const answer = [];
    for (const len of course) {
        const map = new Map();
        for (const order of orders) {
            const orderArr = order.split("").sort();
            const result = getCombinations(orderArr, len);
            for (const comb of result) {
                const key = comb.join("");
                map.set(key, (map.get(key) || 0) + 1);
            }
        }
        const max = Math.max(...map.values(), 0);
        if (max < 2) continue;

        for (const [key, value] of map.entries()) {
            if (value === max) answer.push(key);
        }
    }
    return answer.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
console.log(solution(orders, course));
// ["AC", "ACDE", "BCFG", "CDE"]
