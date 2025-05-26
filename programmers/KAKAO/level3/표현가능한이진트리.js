function solution(numbers) {
    const answer = [];

    function getFullBinaryLength(len) {
        let fullLen = 1;
        while (fullLen < len) {
            fullLen = fullLen * 2 + 1;
        }
        return fullLen;
    }

    function isValidTree(binStr) {
        if (binStr.length === 1) return true;

        const mid = Math.floor(binStr.length / 2);
        const root = binStr[mid];

        const left = binStr.slice(0, mid);
        const right = binStr.slice(mid + 1);

        if (root === "0") {
            if (left.includes("1") || right.includes("1")) return false;
        }

        return isValidTree(left) && isValidTree(right);
    }

    for (let num of numbers) {
        let bin = num.toString(2);
        const fullLen = getFullBinaryLength(bin.length);
        bin = bin.padStart(fullLen, "0");

        answer.push(isValidTree(bin) ? 1 : 0);
    }
    return answer;
}

const numbers = [7, 42, 5];
console.log(solution(numbers)); // [1, 1, 0]
