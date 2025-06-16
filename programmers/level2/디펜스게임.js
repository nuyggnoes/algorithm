function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const enemies = enemy.slice(0, mid).sort((a, b) => b - a);

        let soldier = n;

        for (let i = k; i < enemies.length; i++) {
            soldier -= enemies[i];
        }
        if (soldier >= 0) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}

const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
console.log(solution(n, k, enemy)); // 5
