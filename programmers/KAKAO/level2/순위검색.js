function solution(info, query) {
    const map = new Map();
    function getCombinations(arr, depth = 0, path = [], result = []) {
        if (depth === arr.length) {
            result.push(path.join(" "));
            return;
        }
        getCombinations(arr, depth + 1, [...path, arr[depth]], result);
        getCombinations(arr, depth + 1, [...path, "-"], result);
        return result;
    }
    for (const line of info) {
        const [lang, job, career, food, scoreStr] = line.split(" ");
        const score = Number(scoreStr);
        const keys = getCombinations([lang, job, career, food]);

        for (const key of keys) {
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(score);
        }
    }
    for (const scores of map.values()) {
        scores.sort((a, b) => a - b);
    }

    function getQueryResult(arr, target) {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return arr.length - left;
    }
    const answer = [];
    for (const q of query) {
        const [a, , b, , c, , d, scoreStr] = q.split(" ");
        const key = `${a} ${b} ${c} ${d}`;
        const score = Number(scoreStr);
        const list = map.get(key) || [];

        answer.push(getQueryResult(list, score));
    }
    return answer;
}
const info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
];
const query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
];
console.log(solution(info, query));
