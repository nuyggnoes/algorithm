function solution(numbers, hand) {
    const phone = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        0: [3, 1],
    };
    let answer = "";
    let l = [3, 0];
    let r = [3, 2];
    numbers.forEach((num) => {
        if (num === 1 || num === 4 || num === 7) {
            answer += "L";
            l = phone[num];
        } else if (num === 3 || num === 6 || num === 9) {
            answer += "R";
            r = phone[num];
        } else {
            const numCoords = phone[num];
            let leftDist =
                Math.abs(l[0] - numCoords[0]) + Math.abs(l[1] - numCoords[1]);
            let rightDist =
                Math.abs(r[0] - numCoords[0]) + Math.abs(r[1] - numCoords[1]);
            if (leftDist > rightDist) {
                r = numCoords;
                answer += "R";
            } else if (leftDist < rightDist) {
                l = numCoords;
                answer += "L";
            } else {
                if (hand === "right") {
                    r = numCoords;
                    answer += "R";
                } else {
                    l = numCoords;
                    answer += "L";
                }
            }
        }
    });

    return answer;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";
console.log(solution(numbers, hand));
