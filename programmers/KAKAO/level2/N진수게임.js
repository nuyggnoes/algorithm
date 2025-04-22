function solution(n, t, m, p) {
    let game = "";
    let answer = "";
    let count = 0;
    for (let i = 0; i < t * m; i++) {
        game += i.toString(n).toUpperCase();
    }
    for (let i = p - 1; i < game.length; i += m) {
        answer += game[i];
        count++;
        if (count === t) break;
    }
    return answer;
}

const n = 16;
const t = 16;
const m = 2;
const p = 1;
console.log(solution(n, t, m, p));
