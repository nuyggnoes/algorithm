function solution(n, w, num) {
    const boxList = [];
    let boxLine = [];
    for (let i = 1; i <= n; i++) {
        const x = i % w;
        if (x !== 0) boxLine.push(i);
        else {
            boxLine.push(i);
            if ((i / w) % 2) {
                boxList.unshift(boxLine);
                boxLine = [];
            } else {
                boxList.unshift(boxLine.reverse());
                boxLine = [];
            }
        }
    }
    if (boxLine.length > 0) {
        while (boxLine.length < w) {
            boxLine.push(-1);
        }
        const row = Math.ceil(n / w);
        if (row % 2 === 1) {
            boxList.unshift(boxLine);
        } else {
            boxList.unshift(boxLine.reverse());
        }
    }

    for (let i = 0; i < boxList.length; i++) {
        for (let j = 0; j < boxList[i].length; j++) {
            if (boxList[i][j] === num) {
                let count = 0;
                for (let k = 0; k <= i; k++) {
                    if (boxList[k][j] !== -1) count++;
                }
                return count;
            }
        }
    }
}
const n = 22;
const w = 6;
const num = 8;
console.log(solution(n, w, num)); // 3
