function solution(clothes) {
    let answer = 1;
    let map = new Map();
    clothes.forEach((e) => {
        let kind = e[1];
        map.set(kind, (map.get(kind) || 0) + 1);
    });
    for (let [_, k] of map) {
        answer *= k + 1;
    }
    return answer - 1;
}
const testcase1 = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
]; // 5

const testcase2 = [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
]; // 3
