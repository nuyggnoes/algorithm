// U X : X칸 위 선택
// D X : X칸 아래 선택
// C : 현재 선택된 행 삭제 후 바로 아래 행 선택, 마지막 행 삭제 시 바로 윗 행 선택
// Z : 가장 최근에 삭제된 행 복구, 위치는 변하지 않음

function solution(n, k, cmd) {
    const prev = Array.from({ length: n }, (_, i) => i - 1);
    const next = Array.from({ length: n }, (_, i) => {
        if (i === n - 1) return -1;
        return i + 1;
    });
    const delStack = [];
    let current = k;
    for (let c of cmd) {
        const [type, x] = c.split(" ");
        switch (type) {
            case "U": {
                for (let i = 0; i < +x; i++) current = prev[current];
                break;
            }
            case "D": {
                for (let i = 0; i < +x; i++) current = next[current];
                break;
            }
            case "C": {
                delStack.push(current);
                if (prev[current] !== -1) next[prev[current]] = next[current];
                if (next[current] !== -1) prev[next[current]] = prev[current];
                current = next[current] !== -1 ? next[current] : prev[current];
                break;
            }
            case "Z": {
                const z = delStack.pop();
                if (prev[z] !== -1) next[prev[z]] = z;
                if (next[z] !== -1) prev[next[z]] = z;
            }
        }
    }
    const answer = Array(n).fill("O");
    delStack.forEach((i) => (answer[i] = "X"));
    return answer.join("");
}
const n = 8;
const k = 2;
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];
console.log(solution(n, k, cmd)); // "OOOOXOOO"
