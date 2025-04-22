function solution(n, arr1, arr2) {
    const answer = [];
    const map1 = arr1.map((e) => e.toString(2).padStart(n, "0"));
    const map2 = arr2.map((e) => e.toString(2).padStart(n, "0"));

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            console.log(map1[i][j], map2[i][j]);
            if (map1[i][j] === "1" || map2[i][j] === "1") {
                row += "#";
            } else row += " ";
        }
        answer.push(row);
    }

    return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));
