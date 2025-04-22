function solution(str1, str2) {
    let inter = 0;
    let union = 0;
    const upperStr1 = str1.toUpperCase();
    const upperStr2 = str2.toUpperCase();
    const newStr1 = [];
    for (let i = 0; i < upperStr1.length - 1; i++) {
        if (
            upperStr1[i].charCodeAt() < 65 ||
            upperStr1[i].charCodeAt() > 90 ||
            upperStr1[i + 1].charCodeAt() < 65 ||
            upperStr1[i + 1].charCodeAt() > 90
        ) {
            continue;
        }
        newStr1.push(`${upperStr1[i]}${upperStr1[i + 1]}`);
    }
    union += newStr1.length;
    for (let i = 0; i < upperStr2.length - 1; i++) {
        if (
            upperStr2[i].charCodeAt() < 65 ||
            upperStr2[i].charCodeAt() > 90 ||
            upperStr2[i + 1].charCodeAt() < 65 ||
            upperStr2[i + 1].charCodeAt() > 90
        ) {
            continue;
        }
        const word = `${upperStr2[i]}${upperStr2[i + 1]}`;
        if (newStr1.includes(word)) {
            inter++;
            newStr1.splice(newStr1.indexOf(word), 1);
        } else union++;
    }
    return union === 0 ? 65536 : Math.floor((inter / union) * 65536);
}

function otherSolution(str1, str2) {
    function getMap(str) {
        const upper = str.toUpperCase();
        const map = {};
        for (let i = 0; i < upper.length - 1; i++) {
            const a = upper[i];
            const b = upper[i + 1];
            if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
                const key = a + b;
                map[key] = (map[key] || 0) + 1;
            }
        }
        return map;
    }
    function getIntersectionUnion(map1, map2) {
        let inter = 0;
        let union = 0;
        const keys = new Set([...Object.keys(map1), ...Object.keys(map2)]);
        for (const key of keys) {
            const count1 = map1[key] || 0;
            const count2 = map2[key] || 0;
            inter += Math.min(count1, count2);
            union += Math.max(count1, count2);
        }
        return [inter, union];
    }
    const map1 = getMap(str1);
    const map2 = getMap(str2);
    const [inter, union] = getIntersectionUnion(map1, map2);
    return union ? Math.floor((inter / union) * 65536) : 65536;
}
const str1 = "FRANCE";
const str2 = "french";
console.log(otherSolution(str1, str2));
