function solution(bandage, health, attacks) {
    const [castTime, healPerSec, bonusHeal] = bandage;
    const maxHealth = health;
    let attackIdx = 0;
    let time = 0;
    let success = 0;

    const lastAttackTime = attacks[attacks.length - 1][0];

    while (time <= lastAttackTime) {
        if (attackIdx < attacks.length && attacks[attackIdx][0] === time) {
            health -= attacks[attackIdx][1];
            attackIdx++;
            success = 0;
            if (health <= 0) return -1;
        } else {
            success++;
            health += healPerSec;
            if (success === castTime) {
                health += bonusHeal;
                success = 0;
            }
            if (health > maxHealth) health = maxHealth;
        }
        time++;
    }
    return health;
}
const bandage = [5, 1, 5];
const health = 30;
const attacks = [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
];
console.log(solution(bandage, health, attacks));
