function solution(relation) {
    let rowLen = relation.length;
    let colLen = relation[0].length;
    const colIndex = Array.from({ length: colLen }, (_, i) => i);
    const allCombinations = [];
    function getCombination(arr, length) {
        const visited = Array(colLen).fill(false);
        const result = [];
        const dfs = (path, start) => {
            if (path.length === length) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < colLen; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    path.push(arr[i]);
                    dfs(path, i);
                    path.pop();
                    visited[i] = false;
                }
            }
        };
        dfs([], 0);
        return result;
    }
    for (let i = 1; i <= colLen; i++) {
        allCombinations.push(...getCombination(colIndex, i));
    }
    const candidateKeys = [];
    for (const combination of allCombinations) {
        const seen = new Set();
        for (let row of relation) {
            const key = combination.map((index) => row[index]).join("|");
            seen.add(key);
        }
        if (seen.size === rowLen) {
            let isValid = true;

            for (const key of candidateKeys) {
                if (key.every((k) => combination.includes(k))) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                candidateKeys.push(combination);
            }
        }
    }
    return candidateKeys.length;
}
const relation = [
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
];
console.log(solution(relation));
